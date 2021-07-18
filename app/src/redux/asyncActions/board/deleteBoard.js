import { serverApi } from "../../../server-api";
import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";

export function deleteBoard(id) {
  return async (dispatch) => {
    try {
      const boards = await serverApi.mainService.deleteBoard(id);
      dispatch(getAllBoardResponse(boards));
    } catch (e) {
      // if you browser don`t support localStorage api || http error
      dispatch(getAllBoardReject(e));
    }
  };
}
