export class LocalStorageService {
  makeId() {
    return "xxxx-xxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  _saveBoard(board) {
    board.updateAt = Date.now();
    board.columns = board.columns || [];

    localStorage.setItem(`board-${board.id}`, JSON.stringify(board));
  }

  _getParams(string) {
    return string.split("/");
  }
}
