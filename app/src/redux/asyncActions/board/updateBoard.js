import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_wrapper";
import { updateBoardCreator } from "../../reducers/boardsReducer";

export function updateBoard(board) {
  return async (dispatch) => {
    await allBoardsWrapper(updateBoardCreator, dispatch, () => {
      return serverApi.allBoardsTransport.updateBoard(board.id, board);
    });
  };
}
