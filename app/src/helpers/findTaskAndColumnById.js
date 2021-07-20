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
