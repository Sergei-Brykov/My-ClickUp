export class AllBoardsService {
  constructor(db) {
    this.db = db;
  }

  async getAllBoards() {
    return this.db.getAllBoards();
  }

  async getOneBoard(id) {
    return this.db.getOneBoard(id);
  }

  async createNewBoard(board) {
    const boards = this.db.getAllBoards();
    board.id = this.db.makeId();
    boards.push(board);

    this.db.saveAllBoards(boards);
    this.db.saveBoard(board);

    return boards;
  }

  async deleteBoard(boardId) {
    const boards = this.db.getAllBoards();
    const changedBoards = boards.filter(({ id }) => id !== boardId);

    this.db.saveAllBoards(changedBoards);
    this.db.deleteBoard(boardId);

    return changedBoards;
  }

  async updateBoard(id, boardData) {
    const boards = this.db.getAllBoards();
    const changedBoards = boards.map((board) => {
      if (board.id === id) {
        return boardData;
      }
      return board;
    });

    this.db.saveAllBoards(changedBoards);
    this.db.saveBoard(boardData);

    return changedBoards;
  }
}
