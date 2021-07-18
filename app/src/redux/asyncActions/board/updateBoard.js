import { serverApi } from "../../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";

export function updateBoard(board) {
  return async (dispatch) => {
    try {
      const boards = await serverApi.mainService.updateBoard(board.id, board);
      dispatch(getAllBoardResponse(boards));
    } catch (e) {
      // if you browser don`t support localStorage api || http error
      dispatch(getAllBoardReject(e));
    }
  };
}
