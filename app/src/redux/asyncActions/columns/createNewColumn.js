import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { createNewColumnCreator } from "../../reducers/currentBoardReducer";

export function createNewColumn(boardId, column) {
  return async (dispatch) => {
    await getOneBoardWrapper(createNewColumnCreator, dispatch, () => {
      return serverApi.boardTransport.createNewColumn(boardId, column);
    });
  };
}
