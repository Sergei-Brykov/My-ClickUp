import cl from "../../../helpers/classname";
import styles from "./styles.module.css";
import { TaskHeader } from "./TaskHeader";
import { TaskBody } from "./TaskBody";
import { useDragAndDropItem } from "../../../hooks/useDragAndDrop";

export function TaskView({ task, column, openForm, taskIndex, columnIndex }) {
  const { ref, classes, actions } = useDragAndDropItem(columnIndex, taskIndex);

  return (
    <div
      onDragStart={actions.onDragStart}
      onDragOver={actions.onDragOver}
      onDragLeave={actions.onDragLeave}
      data-id={task.id}
      className={cl(styles.wrap, classes.dragContainerClasses)}
      onDragEnd={actions.onDragEnd}
    >
      <div ref={ref} className={classes.dragDividerClasses} />
      <div draggable className={styles.container}>
        <TaskHeader column={column} {...task} openForm={openForm} />
        <TaskBody {...task} />
      </div>
    </div>
  );
}
