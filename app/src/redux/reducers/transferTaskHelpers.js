export function buildNewBoard(board, { dragged, dropped }) {
  const currentTask = getCurrentTask(board, dragged, true);
  (currentTask || {}).isDrag = true;
  return addCurrentTask(board, currentTask, dropped);
}

export function getCurrentTask(board, dragged, isLocal = false) {
  const { columnIndex, taskIndex } = dragged;
  const copy = board.columns[columnIndex].tasks.slice();

  const currentTask = copy[taskIndex];

  copy.splice(taskIndex, 1);

  board.columns[columnIndex].tasks = copy;

  return { ...currentTask };
}

export function addCurrentTask(board, currentTask, dropped) {
  const { columnIndex, taskIndex } = dropped;
  board.columns[columnIndex].tasks.splice(taskIndex, 0, currentTask);

  return { ...board };
}
