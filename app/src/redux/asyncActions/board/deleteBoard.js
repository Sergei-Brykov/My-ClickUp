import { serverApi } from "../../../server-api";
import { allBoardsWrapper } from "./_decorator";

export function deleteBoard(id) {
  return async (dispatch) => {
    await allBoardsWrapper(dispatch, () => {
      return serverApi.mainService.deleteBoard(id);
    });
  };
}
