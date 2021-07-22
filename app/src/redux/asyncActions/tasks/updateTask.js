import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { updateTaskCreator } from "../../reducers/currentBoardReducer";

export function updateTask(boardId, columnId, body) {
  return async (dispatch) => {
    await getOneBoardWrapper(updateTaskCreator, dispatch, () => {
      return serverApi.boardTransport.updateTask(boardId, columnId, body);
    });
  };
}
