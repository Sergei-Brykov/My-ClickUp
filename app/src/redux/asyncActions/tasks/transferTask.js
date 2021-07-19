import { serverApi } from "../../../server-api";
import {
  getOneBoardReject,
  getOneBoardResponse,
} from "../../reducers/currentBoardReducer";

export function transferTask(boardId, transfer) {
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
