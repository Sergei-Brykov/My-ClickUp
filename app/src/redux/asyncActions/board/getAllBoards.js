import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";

export function getAllBoards() {
  return async (dispatch) => {
    await allBoardsWrapper(dispatch, () => {
      return serverApi.allBoardsTransport.getAllBoards();
    });
  };
}
