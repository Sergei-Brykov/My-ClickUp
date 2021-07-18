import styles from "./styles.module.css";
import { useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskBody } from "./TaskBody";
import { DragAndDropTaskWrapper } from "./DragAndDropTaskWrapper";

export function Task({ task, column, index }) {
  const [formOpen, setFormOpen] = useState(false);

  if (formOpen) {
    return (
      <div className={styles.wrap}>
        <TaskForm onClose={() => setFormOpen(false)} context={{ task }} />
      </div>
    );
  }

  return (
    <DragAndDropTaskWrapper task={task} column={column} index={index}>
      <TaskBody {...task} openForm={() => setFormOpen(true)} />
    </DragAndDropTaskWrapper>
  );
}
