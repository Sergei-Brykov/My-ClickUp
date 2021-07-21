import { Task } from "../../../Task/TaskInBoard";

export function ColumnBodyWrap({ column, columnIndex }) {
  return column.tasks.map((task, taskIndex) => (
    <Task
      key={task.id}
      task={task}
      columnIndex={columnIndex}
      taskIndex={taskIndex}
      column={column}
    />
  ));
}
