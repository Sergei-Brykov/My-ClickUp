import { serverApi } from '../server-api/index';
import { action, computed, makeAutoObservable, observable } from 'mobx';

export class BoardsInstance {
  loading = false;
  boards = [];

  constructor() {
    makeAutoObservable(this);
  }

  async addNewBoard(board) {
    try {
      this.boards = await serverApi.allBoardsTransport.createNewBoard(board);
    } catch (e) {
      this.error = e.message;
    }
  }

  async updateBoard(board) {
    try {
      this.boards = await serverApi.allBoardsTransport.updateBoard(board.id, board);
    } catch (e) {
      this.error = e.message;
    }
  }

  async removeBoard(id) {
    try {
      this.boards = await serverApi.allBoardsTransport.deleteBoard(id);
    } catch (e) {
      this.error = e.message;
    }
  }

  async init() {
    this.loading = true;

    try {
      this.boards = await serverApi.allBoardsTransport.getAllBoards();
      console.log(this.boards);
    } catch (e) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  }
}
