export function findTaskAndColumnById(board, { columnId, taskId }) {
  const column = findColumnById(board, columnId);

  return [column, findTaskById(column, taskId)];
}

export function findColumnById(board, columnId) {
  return board.columns.find((column) => column.id === columnId);
}

export function findTaskById(column, taskId) {
  return column?.tasks.find((task) => task.id === taskId);
}

export function findTaskAndColumnByTaskId(board, taskId) {
  let task;

  let column = board.columns.find((column) => {
    return column.tasks.find((tmpTask) => {
      if (tmpTask.id === taskId) {
        task = tmpTask;
        return true;
      }
    });
  });

  return [column, task];
}
