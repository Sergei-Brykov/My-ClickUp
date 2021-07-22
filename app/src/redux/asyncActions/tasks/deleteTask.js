import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { deleteTaskCreator } from "../../reducers/currentBoardReducer";

export function deleteTask(boardId, columnId, taskId) {
  return async (dispatch) => {
    await getOneBoardWrapper(deleteTaskCreator, dispatch, () => {
      return serverApi.boardTransport.deleteTask(boardId, columnId, taskId);
    });
  };
}
