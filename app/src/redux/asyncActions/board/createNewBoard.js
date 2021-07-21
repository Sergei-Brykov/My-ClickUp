import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";

export function createNewBoard(board) {
  return async (dispatch) => {
    await allBoardsWrapper(dispatch, () => {
      return serverApi.allBoardsTransport.createNewBoard(board);
    });
  };
}
