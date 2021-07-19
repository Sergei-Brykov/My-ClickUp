import {
  getOneBoardResponse,
  getOneBoardReject,
} from "../reducers/currentBoardReducer";

export async function getOneBoardWrapper(dispatch, fun) {
  try {
    const board = await fun();
    dispatch(getOneBoardResponse(board));
  } catch (e) {
    // if you browser don`t support localStorage api || http error
    dispatch(getOneBoardReject(e));
  }
}
