import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function updateTask(boardId, columnId, body) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.put(boardId, columnId, body);
    });
  };
}
