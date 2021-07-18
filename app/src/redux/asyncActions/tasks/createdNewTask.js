import { serverApi } from "../../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";
import {
  getOneBoardReject,
  getOneBoardResponse,
} from "../../reducers/currentBoardReducer";
import { BoardService } from "../../../server-api/localStorageServices/board";

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
