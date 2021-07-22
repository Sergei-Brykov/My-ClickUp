import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { deleteColumnCreator } from "../../reducers/currentBoardReducer";

export function deleteColumn(boardId, columnId) {
  return async (dispatch) => {
    await getOneBoardWrapper(deleteColumnCreator, dispatch, () => {
      return serverApi.boardTransport.deleteColumn(boardId, columnId);
    });
  };
}
