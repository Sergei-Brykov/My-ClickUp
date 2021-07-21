import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";

export function updateBoard(board) {
  return async (dispatch) => {
    await allBoardsWrapper(dispatch, () => {
      return serverApi.mainService.updateBoard(board.id, board);
    });
  };
}
