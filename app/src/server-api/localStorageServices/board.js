import { LocalStorageService } from "./_service";
import {
  addCurrentTask,
  getCurrentTask,
  getCurrentTaskAndCutFromColumn,
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
    const [currentColumn] = this._getCurrentColumn(board, columnId);

    task.createdAt = Date.now();
    task.updatedAt = Date.now();
    task.id = this.makeId();
    currentColumn.tasks.push(task);

    this._saveBoard(board);

    return board;
  }

  async put(boardId, columnId, { newTask, changeColumnIndex }) {
    const board = this._getCurrentBoard(boardId);
    const [column, { columnIndex }] = this._getCurrentColumn(board, columnId);

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
      const currentTask = getCurrentTaskAndCutFromColumn(board, {
        columnIndex,
        taskIndex,
      });
      board.columns[changeColumnIndex].tasks.push(currentTask);
    }

    this._saveBoard(board);

    return board;
  }

  async deleteTask(boardId, columnId, taskId) {
    const board = this._getCurrentBoard(boardId);
    const [column] = this._getCurrentColumn(board, columnId);

    column.tasks = column.tasks.filter((task) => task.id !== taskId);

    this._saveBoard(board);

    return board;
  }

  async transferTask(boardId, { dragged, dropped }) {
    const board = this._getCurrentBoard(boardId);
    const currentTask = getCurrentTaskAndCutFromColumn(board, dragged);

    const changedBoard = addCurrentTask(board, currentTask, dropped);

    this._saveBoard(changedBoard);

    return changedBoard;
  }
}
