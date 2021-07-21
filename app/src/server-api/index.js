import { MainService } from "./localStorageTransport/main";
import { BoardTransport } from "./localStorageTransport/board";

class ServerApi {
  constructor(mainService, boardService) {
    this.mainService = mainService;
    this.boardService = boardService;
  }
}

export const serverApi = new ServerApi(new MainService(), new BoardTransport());
