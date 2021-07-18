import { MainService } from "./localStorageServices/main";
import { BoardService } from "./localStorageServices/board";

class ServerApi {
  constructor(mainService, boardService) {
    this.mainService = mainService;
    this.boardService = boardService;
  }
}

export const serverApi = new ServerApi(new MainService(), new BoardService());
