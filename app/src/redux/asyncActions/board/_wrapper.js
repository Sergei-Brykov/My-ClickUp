import { getAllBoardRejectCreator } from "../../reducers/boardsReducer";

export async function allBoardsWrapper(actionCreator, dispatch, transport) {
  try {
    const boards = await transport();
    dispatch(actionCreator(boards));
  } catch (e) {
    // if you browser don`t support localStorage api || http error
    dispatch(getAllBoardRejectCreator(e.message));
  }
}
