import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { getOneBoardResponseCreator } from "../../reducers/currentBoardReducer";

export function getOneBoard(id) {
  return async (dispatch) => {
    await getOneBoardWrapper(getOneBoardResponseCreator, dispatch, () => {
      return serverApi.allBoardsTransport.getOneBoard(id);
    });
  };
}
