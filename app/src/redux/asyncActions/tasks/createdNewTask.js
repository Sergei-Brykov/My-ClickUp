import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function createNewTask(boardId, columnId, task) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardTransport.createNewTask(boardId, columnId, task);
    });
  };
}
