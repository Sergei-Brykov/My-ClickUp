import { serverApi } from "../../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";
import {
  getOneBoardReject,
  getOneBoardResponse,
} from "../../reducers/currentBoardReducer";

export function transferColumn(boardId, columnId, index, offset) {
  return async (dispatch) => {
    try {
      const board = await serverApi.boardService.transferColumn(
        boardId,
        columnId,
        index,
        offset
      );
      dispatch(getOneBoardResponse(board));
    } catch (e) {
      dispatch(getOneBoardReject(e));
    }
  };
}
