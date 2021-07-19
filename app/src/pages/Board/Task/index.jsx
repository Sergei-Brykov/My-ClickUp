import styles from "./styles.module.css";
import { useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskView } from "./TaskView";

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
    <TaskView
      task={task}
      taskIndex={taskIndex}
      columnIndex={columnIndex}
      openForm={() => setFormOpen(true)}
    />
  );
}
