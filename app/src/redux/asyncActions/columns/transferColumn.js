import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_decorator";

export function transferColumn(boardId, columnId, index, offset) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.boardService.transferColumn(
        boardId,
        columnId,
        index,
        offset
      );
    });
  };
}
