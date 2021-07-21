import { getAllBoardRejectCreator } from "../../reducers/boardsReducer";

export async function allBoardsWrapper(actionCreator, dispatch, fun) {
  try {
    const boards = await fun();
    dispatch(actionCreator(boards));
  } catch (e) {
    // if you browser don`t support localStorage api || http error
    dispatch(getAllBoardRejectCreator(e.message));
  }
}
