import { AllBoardsService } from "./LSTransport/AllBoardsService";
import { BoardService } from "./LSTransport/BoardService";
import { LocalStorageDB } from "./LSTransport/LocalStorageDB";

//I have no reason to create a class
export const serverApi = {
  boardTransport: new BoardService(new LocalStorageDB()),
  allBoardsTransport: new AllBoardsService(new LocalStorageDB()),
};
