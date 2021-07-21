import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";
import { deleteBoardCreator } from "../../reducers/boardsReducer";

export function deleteBoard(id) {
  return async (dispatch) => {
    await allBoardsWrapper(deleteBoardCreator, dispatch, () => {
      return serverApi.allBoardsTransport.deleteBoard(id);
    });
  };
}
