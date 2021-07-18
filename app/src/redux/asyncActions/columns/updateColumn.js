import { serverApi } from "../../../server-api";
import {
  getOneBoardReject,
  getOneBoardResponse,
} from "../../reducers/currentBoardReducer";

export function updateColumn(boardId, column) {
  return async (dispatch) => {
    try {
      const board = await serverApi.boardService.updateColumn(boardId, column);
      dispatch(getOneBoardResponse(board));
    } catch (e) {
      dispatch(getOneBoardReject(e));
    }
  };
}
