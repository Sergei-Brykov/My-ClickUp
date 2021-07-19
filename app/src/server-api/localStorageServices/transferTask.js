import { serverApi } from "../index";
import {
  getOneBoardReject,
  getOneBoardResponse,
} from "../../redux/reducers/currentBoardReducer";

export function createNewTask(boardId, transfer) {
  return async (dispatch) => {
    try {
      const board = await serverApi.boardService.transferTask(
        boardId,
        transfer
      );
      dispatch(getOneBoardResponse(board));
    } catch (e) {
      dispatch(getOneBoardReject(e));
    }
  };
}
