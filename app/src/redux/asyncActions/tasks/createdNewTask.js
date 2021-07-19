import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_decorator";

export function createNewTask(boardId, columnId, task) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.createNewTask(boardId, columnId, task);
    });
  };
}
