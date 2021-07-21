import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function transferTask(boardId, transfer) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.transferTask(boardId, transfer);
    });
  };
}
