import { serverApi } from '../server-api/index';
import { makeAutoObservable } from 'mobx';
import { inject } from 'react-ioc';
import { ModalInstance } from './ModalInstance';

export class BoardInstance {
  loading = false;
  board = {};
  modalInstance = inject(this, ModalInstance);

  constructor() {
    makeAutoObservable(this);
  }

  async createNewColumn(boardId, column) {
    try {
      this.board = await serverApi.boardTransport.createNewColumn(boardId, column);
    } catch (e) {
      this.error = e.message;
    }
  }

  async updateColumn(boardId, column) {
    try {
      this.board = await serverApi.boardTransport.updateColumn(boardId, column);
    } catch (e) {
      this.error = e.message;
    }
  }

  async removeColumn(boardId, columnId) {
    try {
      this.board = await serverApi.boardTransport.deleteColumn(boardId, columnId);
    } catch (e) {
      this.error = e.message;
    }
  }

  async transferColumn(boardId, columnId, index, offset) {
    try {
      this.board = await serverApi.boardTransport.transferColumn(boardId, columnId, index, offset);
    } catch (e) {
      this.error = e.message;
    }
  }

  async createNewTask(boardId, columnId, task) {
    try {
      this.board = await serverApi.boardTransport.createNewTask(boardId, columnId, task);
    } catch (e) {
      this.error = e.message;
    }
  }

  async updateTask(boardId, columnId, body) {
    try {
      this.board = await serverApi.boardTransport.updateTask(boardId, columnId, body);
    } catch (e) {
      this.error = e.message;
    }
  }

  async deleteTask(boardId, columnId, taskId) {
    try {
      this.board = await serverApi.boardTransport.deleteTask(boardId, columnId, taskId);
    } catch (e) {
      this.error = e.message;
    }
  }

  async transferTask(boardId, { dragged, dropped }) {
    try {
      this.board = await serverApi.boardTransport.transferTask(boardId, { dragged, dropped });
    } catch (e) {
      this.error = e.message;
    }
  }

  async init(id) {
    this.loading = true;

    try {
      this.board = await serverApi.allBoardsTransport.getOneBoard(id);
    } catch (e) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  }
}
