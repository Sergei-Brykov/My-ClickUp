import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { createNewTaskCreator } from "../../reducers/currentBoardReducer";

export function createNewTask(boardId, columnId, task) {
  return async (dispatch) => {
    await getOneBoardWrapper(createNewTaskCreator, dispatch, () => {
      return serverApi.boardTransport.createNewTask(boardId, columnId, task);
    });
  };
}
