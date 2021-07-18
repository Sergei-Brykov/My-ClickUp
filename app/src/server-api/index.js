import { BoardService } from "./localStorageServices/board";

class ServerApi {
  constructor(boardService) {
    this.boardService = boardService;
  }
}

export const serverApi = new ServerApi(new BoardService());
