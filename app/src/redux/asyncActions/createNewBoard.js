import { serverApi } from "../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../reducers/boardsReducer";

export function createNewBoard(board) {
  return async (dispatch) => {
    try {
      const boards = await serverApi.boardService.createNewBoard(board);
      dispatch(getAllBoardResponse(boards));
    } catch (e) {
      // if you browser don`t support localStorage api || http error
      dispatch(getAllBoardReject(e));
    }
  };
}
