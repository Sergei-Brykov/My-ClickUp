import { BoardService } from "./LSTransport/BoardService";
import { ColumnService } from "./LSTransport/ColumnService";
import { LocalStorageDB } from "./LSTransport/LocalStorageDB";

//I have no reason to create a class
export const serverApi = {
  //I have used asynchronous functions for compatibility with server-side requests
  boardTransport: new ColumnService(new LocalStorageDB()),
  allBoardsTransport: new BoardService(new LocalStorageDB()),
};
