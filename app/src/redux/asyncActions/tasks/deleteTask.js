import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function deleteTask(boardId, columnId, taskId) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.deleteTask(boardId, columnId, taskId);
    });
  };
}
