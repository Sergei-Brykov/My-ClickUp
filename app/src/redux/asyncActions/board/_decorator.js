import {
  getAllBoardReject,
  getAllBoardResponse,
} from "../../reducers/boardsReducer";

export async function allBoardsWrapper(dispatch, fun) {
  try {
    const boards = await fun();
    dispatch(getAllBoardResponse(boards));
  } catch (e) {
    // if you browser don`t support localStorage api || http error
    dispatch(getAllBoardReject(e));
  }
}
