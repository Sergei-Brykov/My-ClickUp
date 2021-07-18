import { LocalStorageService } from "./_service";

export class BoardService extends LocalStorageService {
  // _saveAllBoards(boards) {
  //   localStorage.setItem("all-boards", JSON.stringify(boards));
  // }
  //

  //
  // _deleteBoard(id) {
  //   localStorage.removeItem(`board-${id}`);
  // }

  _getCurrentBoard(id) {
    return JSON.parse(localStorage.getItem(`board-${id}`));
  }

  createNewColumn(boardId, column) {
    const board = this._getCurrentBoard(boardId);
    board.columns.push(column);

    this._saveBoard(board, Date.now());

    return board;
  }
}
