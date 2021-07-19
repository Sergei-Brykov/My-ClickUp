import { serverApi } from "../../../server-api";
import {
  getOneBoardReject,
  getOneBoardResponse,
} from "../../reducers/currentBoardReducer";

export function createNewTask(boardId, columnId, task) {
  return async (dispatch) => {
    try {
      const board = await serverApi.boardService.createNewTask(
        boardId,
        columnId,
        task
      );
      dispatch(getOneBoardResponse(board));
    } catch (e) {
      dispatch(getOneBoardReject(e));
    }
  };
}
