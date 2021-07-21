import { serverApi } from "../../../server-api";
import { getOneBoardWrapper } from "../_wrapper";

export function getOneBoard(id) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      return serverApi.mainService.getOneBoard(id);
    });
  };
}
