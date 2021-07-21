export class LocalStorageDB {
  saveAllBoards(boards) {
    localStorage.setItem("all-boards", JSON.stringify(boards));
  }

  deleteBoard(id) {
    localStorage.removeItem(`board-${id}`);
  }

  saveBoard(board) {
    board.updateAt = Date.now();
    board.columns = board.columns || [];

    localStorage.setItem(`board-${board.id}`, JSON.stringify(board));
  }

  getOneBoard(id) {
    const board = JSON.parse(localStorage.getItem(`board-${id}`));

    if (!board) {
      throw new Error("Ooops something wrong... current board did`t find");
    }

    return board;
  }

  getAllBoards() {
    return JSON.parse(localStorage.getItem("all-boards")) || [];
  }

  getCurrentColumn(board, id) {
    let index;
    const column = board.columns.find((column, idx) => {
      if (column.id === id) {
        index = idx;
        return true;
      }
    });

    if (!column) {
      throw new Error("Ooops something wrong... current column did`t find");
    }

    return [column, { columnIndex: index }];
  }
  // helpers function
  getCurrentTaskAndCutFromColumn(board, dragged) {
    const { columnIndex, taskIndex } = dragged;
    const copy = board.columns[columnIndex].tasks.slice();

    const currentTask = copy[taskIndex];

    copy.splice(taskIndex, 1);

    board.columns[columnIndex].tasks = copy;

    return { ...currentTask };
  }

  addCurrentTask(board, currentTask, dropped) {
    const { columnIndex, taskIndex } = dropped;
    board.columns[columnIndex].tasks.splice(taskIndex, 0, currentTask);

    return { ...board };
  }

  makeId() {
    return "xxxx-xxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
