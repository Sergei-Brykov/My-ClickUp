import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function createNewColumn(boardId, column) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardTransport.createNewColumn(boardId, column);
    });
  };
}
