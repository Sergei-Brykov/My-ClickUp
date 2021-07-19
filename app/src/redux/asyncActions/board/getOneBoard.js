import { serverApi } from "../../../server-api";
import { getOneBoardRequest } from "../../reducers/currentBoardReducer";
import { getOneBoardWrapper } from "../_decorator";

export function getOneBoard(id) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      dispatch(getOneBoardRequest());
      return serverApi.mainService.getOneBoard(id);
    });
  };
}
