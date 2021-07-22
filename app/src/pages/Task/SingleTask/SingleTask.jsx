import styles from "./styles.module.css";
import { useTaskForm } from "../../../hooks/useTaskForm";
import { TaskHeader } from "./TaskHeader";
import { useTaskHandle } from "../../../hooks/useTaskHandle";
import { SingleTaskFooter } from "./SingleTaskFooter";
import { SingleTaskBody } from "./SingleTaskBody";

export function SingleTask({
  task,
  board,
  column,
  onClose = () => alert("TASK SUCCESSFULLY SAVED"),
}) {
  const [deleteTaskHandler] = useTaskHandle(task.id, column, onClose);
  const [form] = useTaskForm(onClose, {
    task,
    columnId: column.id,
    columnIndex: board.columns.findIndex((tmp) => tmp.id === column.id),
  });

  if (!task) return null;

  return (
    <form className={styles.container} onSubmit={form.onSubmit}>
      <TaskHeader task={task} board={board} column={column} />
      <SingleTaskBody form={form} board={board} />
      <SingleTaskFooter onDelete={deleteTaskHandler} form={form} />
    </form>
  );
}
