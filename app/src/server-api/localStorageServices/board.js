import { LocalStorageService } from "./_service";
import {
  addCurrentTask,
  getCurrentTask,
} from "../../redux/reducers/transferTaskHelpers";

export class BoardService extends LocalStorageService {
  _getCurrentBoard(id) {
    const board = JSON.parse(localStorage.getItem(`board-${id}`));

    if (!board) {
      throw new Error("Ooops something wrong... current board did`t find");
    }

    return board;
  }

  _getCurrentColumn(board, id) {
    const column = board.columns.find((column) => column.id === id);

    if (!column) {
      throw new Error("Ooops something wrong... current column did`t find");
    }

    return column;
  }

  async createNewColumn(boardId, column) {
    const board = this._getCurrentBoard(boardId);
    column.id = this.makeId();
    column.tasks = [];
    board.columns.push(column);

    this._saveBoard(board);

    return board;
  }

  async deleteColumn(boardId, columnId) {
    const board = this._getCurrentBoard(boardId);
    board.columns = board.columns.filter((column) => column.id !== columnId);

    this._saveBoard(board);

    return board;
  }

  async updateColumn(boardId, newColumn) {
    const board = this._getCurrentBoard(boardId);
    board.columns = board.columns.map((column) => {
      if (column.id === newColumn.id) {
        return newColumn;
      }
      return column;
    });

    this._saveBoard(board);

    return board;
  }

  async transferColumn(boardId, columnId, index, offset) {
    const board = this._getCurrentBoard(boardId);

    const tmp = board.columns[index];
    board.columns[index] = board.columns[index + offset];
    board.columns[index + offset] = tmp;

    this._saveBoard(board);

    return board;
  }

  async createNewTask(boardId, columnId, task) {
    const board = this._getCurrentBoard(boardId);
    const currentColumn = this._getCurrentColumn(board, columnId);

    task.createdAt = Date.now();
    task.id = this.makeId();
    currentColumn.tasks.push(task);

    this._saveBoard(board);

    return board;
  }

  async put(boardId, columnId, newTask) {
    const board = this._getCurrentBoard(boardId);
    const column = this._getCurrentColumn(board, columnId);

    column.tasks = column.tasks.map((task) => {
      if (task.id === newTask.id) {
        return newTask;
      }
      return task;
    });

    this._saveBoard(board);

    return board;
  }

  async deleteTask(boardId, columnId, taskId) {
    const board = this._getCurrentBoard(boardId);
    const column = this._getCurrentColumn(board, columnId);

    column.tasks = column.tasks.filter((task) => task.id !== taskId);

    this._saveBoard(board);

    return board;
  }

  async transferTask(boardId, { dragged, dropped }) {
    const board = this._getCurrentBoard(boardId);
    const currentTask = getCurrentTask(board, dragged);

    const changedBoard = addCurrentTask(board, currentTask, dropped);

    this._saveBoard(changedBoard);

    return changedBoard;
  }
}
