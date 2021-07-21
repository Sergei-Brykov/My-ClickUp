import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function updateTask(boardId, columnId, body) {
  return async (dispatch, store) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardTransport.updateTask(boardId, columnId, body);
    });
  };
}
