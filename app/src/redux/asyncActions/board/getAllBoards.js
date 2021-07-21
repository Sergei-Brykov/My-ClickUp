import { serverApi } from "../../../server-api";
import { getAllBoardRequest } from "../../reducers/boardsReducer";
import { allBoardsWrapper } from "./_wrapper";

export function getAllBoards() {
  return async (dispatch) => {
    await allBoardsWrapper(dispatch, () => {
      dispatch(getAllBoardRequest());
      return serverApi.mainService.getAllBoards();
    });
  };
}
