import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_decorator";

export function createNewBoard(board) {
  return async (dispatch) => {
    await allBoardsWrapper(dispatch, () => {
      return serverApi.mainService.createNewBoard(board);
    });
  };
}
