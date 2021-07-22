import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { updateColumnCreator } from "../../reducers/currentBoardReducer";

export function updateColumn(boardId, column) {
  return async (dispatch) => {
    await getOneBoardWrapper(updateColumnCreator, dispatch, () => {
      return serverApi.boardTransport.updateColumn(boardId, column);
    });
  };
}
