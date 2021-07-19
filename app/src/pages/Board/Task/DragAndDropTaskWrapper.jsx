import styles from "./styles.module.css";
import cl from "../../../helpers/classname";
import { TaskHeader } from "./taskHeader";
import { useContext, useState } from "react";
import { DragAndDropContext } from "../../../Providers/DragAndDropProvider";

export function DragAndDropTaskWrapper({
  children,
  task,
  taskIndex,
  columnIndex,
}) {
  const { onDragStart, onDragEnd, onDragOver } = useContext(DragAndDropContext);
  const [isDrag, setIsDrag] = useState(false);

  return (
    <div
      className={cl(styles.wrap, (isDrag || task.isDrag) && styles.drag)}
      data-column-id={"dd"}
    >
      <div
        draggable
        onDragEnd={(e) => onDragEnd(e, columnIndex, taskIndex)}
        onDragStart={(e) => {
          setIsDrag(true);
          onDragStart(e, columnIndex, taskIndex);
        }}
        onDrop={() => setIsDrag(true)}
        onDragOver={(e) => onDragOver(e, columnIndex, taskIndex)}
        onDragEnter={(e) => {}}
        className={cl(styles.container, styles.top)}
      >
        <TaskHeader {...task} />
      </div>
      <div className={cl(styles.container, styles.bottom)}>{children}</div>
    </div>
  );
}
