import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";
import { getAllBoardResponseCreator } from "../../reducers/boardsReducer";

export function getAllBoards() {
  return async (dispatch) => {
    await allBoardsWrapper(getAllBoardResponseCreator, dispatch, () => {
      return serverApi.allBoardsTransport.getAllBoards();
    });
  };
}
