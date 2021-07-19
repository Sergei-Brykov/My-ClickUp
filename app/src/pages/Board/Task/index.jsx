import styles from "./styles.module.css";
import { useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskBody } from "./TaskBody";
import { DragAndDropTaskWrapper } from "./DragAndDropTaskWrapper";

export function Task({ task, column, taskIndex, columnIndex }) {
  const [formOpen, setFormOpen] = useState(false);

  if (formOpen) {
    return (
      <div className={styles.wrap}>
        <TaskForm onClose={() => setFormOpen(false)} context={{ task }} />
      </div>
    );
  }

  return (
    <DragAndDropTaskWrapper
      task={task}
      column={column}
      taskIndex={taskIndex}
      columnIndex={columnIndex}
    >
      <TaskBody {...task} openForm={() => setFormOpen(true)} />
    </DragAndDropTaskWrapper>
  );
}
