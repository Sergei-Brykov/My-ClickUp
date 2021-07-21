import { LocalStorageService } from "./_service";

export class MainService extends LocalStorageService {
  _saveAllBoards(boards) {
    localStorage.setItem("all-boards", JSON.stringify(boards));
  }

  _deleteBoard(id) {
    localStorage.removeItem(`board-${id}`);
  }

  getAllBoards() {
    return JSON.parse(localStorage.getItem("all-boards")) || [];
  }

  async getOneBoard(id) {
    const board = JSON.parse(localStorage.getItem(`board-${id}`));

    if (!board) {
      throw new Error("Ooops something wrong... current board did`t find");
    }

    return board;
  }

  async createNewBoard(board) {
    const boards = this.getAllBoards();
    board.id = this.makeId();
    boards.push(board);

    this._saveAllBoards(boards);
    this._saveBoard(board);

    return boards;
  }

  async deleteBoard(boardId) {
    const boards = this.getAllBoards();
    const changedBoards = boards.filter(({ id }) => id !== boardId);

    this._saveAllBoards(changedBoards);
    this._deleteBoard(boardId);

    return changedBoards;
  }

  async updateBoard(id, boardData) {
    const boards = this.getAllBoards();
    const changedBoards = boards.map((board) => {
      if (board.id === id) {
        return boardData;
      }
      return board;
    });

    this._saveAllBoards(changedBoards);
    this._saveBoard(boardData);

    return changedBoards;
  }
}
