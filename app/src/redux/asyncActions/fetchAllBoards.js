import { serverApi } from "../../server-api";
import {
  getAllBoardReject,
  getAllBoardRequest,
  getAllBoardResponse,
} from "../reducers/boardsReducer";

export function fetchAllBoards() {
  return async (dispatch) => {
    dispatch(getAllBoardRequest());
    try {
      const boards = await serverApi.boardService.getAllBoards();
      dispatch(getAllBoardResponse(boards));
    } catch (e) {
      // if you browser don`t support localStorage api || http error
      dispatch(getAllBoardReject(e));
    }
  };
}
