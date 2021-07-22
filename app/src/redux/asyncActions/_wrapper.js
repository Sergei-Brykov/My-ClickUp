import { getOneBoardReject } from "../reducers/currentBoardReducer";

export async function getOneBoardWrapper(actionCreator, dispatch, transport) {
  try {
    const board = await transport();
    dispatch(actionCreator(board));
  } catch (e) {
    // if you browser don`t support localStorage api || http error
    dispatch(getOneBoardReject(e.message));
  }
}
