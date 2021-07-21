import { serverApi } from "../../../server-api";
import { getOneBoardRequest } from "../../reducers/currentBoardReducer";
import { getOneBoardWrapper } from "../_wrapper";

export function getOneBoard(id) {
  return async (dispatch) => {
    await getOneBoardWrapper(dispatch, () => {
      dispatch(getOneBoardRequest());
      return serverApi.mainService.getOneBoard(id);
    });
  };
}
