import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { transferTaskCreator } from "../../reducers/currentBoardReducer";

export function transferTask(boardId, transfer) {
  return async (dispatch) => {
    await getOneBoardWrapper(transferTaskCreator, dispatch, () => {
      return serverApi.boardTransport.transferTask(boardId, transfer);
    });
  };
}
