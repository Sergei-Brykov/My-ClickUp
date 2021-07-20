import { useContext, useMemo, useRef, useState } from "react";
import { DragAndDropContext } from "../../../Providers/DragAndDropProvider";
import cl from "../../../helpers/classname";
import styles from "./styles.module.css";
import { TaskHeader } from "./TaskHeader";
import { TaskBody } from "./TaskBody";

function useDragAndDrop(columnIndex, taskIndex) {
  const ref = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const { isDragAndDrop, onDragStart, onDragOver, onDragLeave, onDragEnd } =
    useContext(DragAndDropContext);

  return {
    ref,
    classes: cl(
      styles.wrap,
      isDrag && styles.drag,
      isDragAndDrop && "pointer-events"
    ),
    actions: {
      onDragStart: () => {
        setIsDrag(true);
        onDragStart({ taskIndex, columnIndex });
      },
      onDragOver: (e) => {
        onDragOver(e, { taskIndex, columnIndex }, ref.current);
      },
      onDragLeave: (e) => onDragLeave(e, ref.current),
      onDragEnd: () => {
        setIsDrag(false);
        onDragEnd();
      },
    },
  };
}

export function TaskView({ task, column, openForm, taskIndex, columnIndex }) {
  const { ref, classes, actions } = useDragAndDrop(columnIndex, taskIndex);

  return (
    <div
      onDragStart={actions.onDragStart}
      onDragOver={actions.onDragOver}
      onDragLeave={actions.onDragLeave}
      data-id={task.id}
      className={classes}
      onDragEnd={actions.onDragEnd}
    >
      <div ref={ref} className="dropListener" />
      <div draggable className={styles.container}>
        <TaskHeader column={column} {...task} openForm={openForm} />
        <TaskBody {...task} />
      </div>
    </div>
  );
}
