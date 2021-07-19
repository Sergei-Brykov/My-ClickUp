import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_decorator";

export function createNewColumn(boardId, column) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.createNewColumn(boardId, column);
    });
  };
}
