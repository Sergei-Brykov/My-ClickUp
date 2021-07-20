import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_decorator";

export function updateTask(boardId, columnId, task) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.put(boardId, columnId, task);
    });
  };
}
