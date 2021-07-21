import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";
import { createNewBoardCreator } from "../../reducers/boardsReducer";

export function createNewBoard(board) {
  return async (dispatch) => {
    await allBoardsWrapper(createNewBoardCreator, dispatch, () => {
      return serverApi.allBoardsTransport.createNewBoard(board);
    });
  };
}
