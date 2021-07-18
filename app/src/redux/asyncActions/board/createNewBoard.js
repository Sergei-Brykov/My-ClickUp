import { serverApi } from "../../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";
import { MainService } from "../../../server-api/localStorageServices/main";

export function createNewBoard(board) {
  return async (dispatch) => {
    try {
      const boards = await serverApi.mainService.createNewBoard(board);
      dispatch(getAllBoardResponse(boards));
    } catch (e) {
      // if you browser don`t support localStorage api || http error
      dispatch(getAllBoardReject(e));
    }
  };
}
