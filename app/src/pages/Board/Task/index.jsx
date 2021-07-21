import styles from "./styles.module.css";
import { useState } from "react";
import { TaskForm } from "../../Task/TaskForm/TaskForm";
import { TaskView } from "./TaskView";

export function Task({ task, column, taskIndex, columnIndex }) {
  const [formOpen, setFormOpen] = useState(false);

  if (formOpen) {
    return (
      <div className={styles.wrap}>
        <TaskForm
          onClose={() => setFormOpen(false)}
          context={{ task, columnId: column.id }}
        />
      </div>
    );
  }

  return (
    <TaskView
      task={task}
      column={column}
      taskIndex={taskIndex}
      columnIndex={columnIndex}
      openForm={() => setFormOpen(true)}
    />
  );
}
