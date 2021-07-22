export class ColumnService {
  constructor(db) {
    this.db = db;
  }
  //I have used asynchronous functions for compatibility with server-side requests
  async createNewColumn(boardId, column) {
    const board = this.db.getOneBoard(boardId);
    column.id = this.db.makeId();
    column.tasks = [];
    board.columns.push(column);

    this.db.saveBoard(board);

    return board;
  }

  async deleteColumn(boardId, columnId) {
    const board = this.db.getOneBoard(boardId);
    board.columns = board.columns.filter((column) => column.id !== columnId);

    this.db.saveBoard(board);

    return board;
  }

  async updateColumn(boardId, newColumn) {
    const board = this.db.getOneBoard(boardId);
    board.columns = board.columns.map((column) => {
      if (column.id === newColumn.id) {
        return newColumn;
      }
      return column;
    });

    this.db.saveBoard(board);

    return board;
  }

  async transferColumn(boardId, columnId, index, offset) {
    const board = this.db.getOneBoard(boardId);

    const tmp = board.columns[index];
    board.columns[index] = board.columns[index + offset];
    board.columns[index + offset] = tmp;

    this.db.saveBoard(board);

    return board;
  }

  async createNewTask(boardId, columnId, task) {
    const board = this.db.getOneBoard(boardId);
    const [currentColumn] = this.db.getCurrentColumn(board, columnId);

    task.createdAt = Date.now();
    task.updatedAt = Date.now();
    task.id = this.db.makeId();
    currentColumn.tasks.push(task);

    this.db.saveBoard(board);

    return board;
  }

  async updateTask(boardId, columnId, { newTask, changeColumnIndex }) {
    const board = this.db.getOneBoard(boardId);
    const [column, { columnIndex }] = this.db.getCurrentColumn(board, columnId);

    let taskIndex;

    newTask.updatedAt = Date.now();
    column.tasks = column.tasks.map((task, idx) => {
      if (task.id === newTask.id) {
        taskIndex = idx;
        return newTask;
      }
      return task;
    });

    if (changeColumnIndex) {
      const currentTask = this.db.getCurrentTaskAndCutFromColumn(board, {
        columnIndex,
        taskIndex,
      });
      board.columns[changeColumnIndex].tasks.push(currentTask);
    }

    this.db.saveBoard(board);

    return board;
  }

  async deleteTask(boardId, columnId, taskId) {
    const board = this.db.getOneBoard(boardId);
    const [column] = this.db.getCurrentColumn(board, columnId);

    column.tasks = column.tasks.filter((task) => task.id !== taskId);

    this.db.saveBoard(board);

    return board;
  }

  async transferTask(boardId, { dragged, dropped }) {
    const board = this.db.getOneBoard(boardId);
    const currentTask = this.db.getCurrentTaskAndCutFromColumn(board, dragged);

    const changedBoard = this.db.addCurrentTask(board, currentTask, dropped);

    this.db.saveBoard(changedBoard);

    return changedBoard;
  }
}
