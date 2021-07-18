import { LocalStorageService } from "./_service";

export class BoardService extends LocalStorageService {
  _saveAllBoards(boards) {
    localStorage.setItem("all-boards", JSON.stringify(boards));
  }

  _saveBoard(board, updateAt) {
    board.updateAt = updateAt;
    board.columns = board.columns || [];

    localStorage.setItem(`board-${board.id}`, JSON.stringify(board));
  }

  _deleteBoard(id) {
    localStorage.removeItem(`board-${id}`);
  }

  getAllBoards() {
    return JSON.parse(localStorage.getItem("all-boards")) || [];
  }

  async getOneBoard(id) {
    return this.getAllBoards().find((board) => board.id === id);
  }

  async createNewBoard(board) {
    const boards = this.getAllBoards();
    board.id = this.makeId();
    boards.push(board);

    this._saveAllBoards(boards);
    this._saveBoard(board, Date.now());

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
    this._saveBoard(boardData, Date.now());

    return changedBoards;
  }
}
