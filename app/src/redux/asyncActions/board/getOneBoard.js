import { serverApi } from "../../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";
import {
  getOneBoardReject,
  getOneBoardRequest,
  getOneBoardResponse,
} from "../../reducers/currentBoardReducer";

export function getOneBoard(id) {
  return async (dispatch) => {
    dispatch(getOneBoardRequest());
    try {
      const board = await serverApi.mainService.getOneBoard(id);
      dispatch(getOneBoardResponse(board));
    } catch (e) {
      // if you browser don`t support localStorage api || http error
      dispatch(getOneBoardReject(e));
    }
  };
}
