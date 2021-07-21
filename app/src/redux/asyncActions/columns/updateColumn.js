import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function updateColumn(boardId, column) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.updateColumn(boardId, column);
    });
  };
}
