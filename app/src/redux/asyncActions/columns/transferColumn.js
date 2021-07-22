import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";
import { transferColumnCreator } from "../../reducers/currentBoardReducer";

export function transferColumn(boardId, columnId, index, offset) {
  return async (dispatch) => {
    await getOneBoardWrapper(transferColumnCreator, dispatch, () => {
      return serverApi.boardTransport.transferColumn(
        boardId,
        columnId,
        index,
        offset
      );
    });
  };
}
