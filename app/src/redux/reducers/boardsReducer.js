const initialState = {
  boards: null,
  loading: true,
  error: "",
};

export const GET_ALL_BOARDS_REQUEST = "GET_ALL_BOARDS_REQUEST";
export const GET_ALL_BOARDS_REJECT = "GET_ALL_BOARDS_REJECT";
export const GET_ALL_BOARDS_RESPONSE = "GET_ALL_BOARDS_RESPONSE";
export const CREATE_NEW_BOARD = "CREATE_NEW_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";

export const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOARDS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_BOARDS_REJECT:
      return { ...state, error: action.data };
    case GET_ALL_BOARDS_RESPONSE:
    case CREATE_NEW_BOARD:
    case DELETE_BOARD:
    case UPDATE_BOARD:
      return { error: "", loading: false, boards: action.data };

    default:
      return state;
  }
};

export const getAllBoardRequestCreator = () => ({
  type: GET_ALL_BOARDS_REQUEST,
});

export const getAllBoardRejectCreator = (error) => ({
  type: GET_ALL_BOARDS_REJECT,
  data: error,
});

export const getAllBoardResponseCreator = (boards) => ({
  type: GET_ALL_BOARDS_RESPONSE,
  data: boards,
});

export const createNewBoardCreator = (boards) => ({
  type: CREATE_NEW_BOARD,
  data: boards,
});

export const deleteBoardCreator = (boards) => ({
  type: DELETE_BOARD,
  data: boards,
});
export const updateBoardCreator = (boards) => ({
  type: UPDATE_BOARD,
  data: boards,
});
