import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_decorator";

export function deleteColumn(boardId, columnId) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.deleteColumn(boardId, columnId);
    });
  };
}
