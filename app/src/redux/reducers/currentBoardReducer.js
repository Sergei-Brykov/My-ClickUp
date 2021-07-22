const initialState = {
  board: null,
  loading: true,
  error: "",
};

export const GET_BOARD_REQUEST = "GET_BOARD_REQUEST";
export const GET_BOARD_REJECT = "GET_BOARD_REJECT";
export const GET_BOARD_RESPONSE = "GET_BOARD_RESPONSE";

export const CREATE_NEW_COLUMN = "CREATE_NEW_COLUMN";
export const UPDATE_COLUMN = "UPDATE_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const TRANSFER_COLUMN = "TRANSFER_COLUMN";

export const CREATE_NEW_TASK = "CREATE_NEW_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TRANSFER_TASK = "TRANSFER_TASK";

export const CLEAN_BOARD = "CLEAN_BOARD";

export const currentBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_REQUEST:
      return { ...state, loading: true };
    case GET_BOARD_REJECT:
      return { ...state, error: action.data };
    case GET_BOARD_RESPONSE:

    case CREATE_NEW_COLUMN:
    case UPDATE_COLUMN:
    case DELETE_COLUMN:
    case TRANSFER_COLUMN:

    case CREATE_NEW_TASK:
    case UPDATE_TASK:
    case DELETE_TASK:
    case TRANSFER_TASK:
      return { ...state, error: "", loading: false, board: action.data };

    case CLEAN_BOARD:
      return { ...state, board: null };

    default:
      return state;
  }
};

export const getOneBoardRequestCreator = () => ({ type: GET_BOARD_REQUEST });

export const getOneBoardReject = (error) => ({
  type: GET_BOARD_REJECT,
  data: error,
});

export const getOneBoardResponseCreator = (board) => ({
  type: GET_BOARD_RESPONSE,
  data: board,
});

// COLUMN CRUD

export const createNewColumnCreator = (data) => ({
  type: CREATE_NEW_COLUMN,
  data,
});

export const updateColumnCreator = (data) => ({
  type: UPDATE_COLUMN,
  data,
});

export const deleteColumnCreator = (data) => ({
  type: DELETE_COLUMN,
  data,
});

export const transferColumnCreator = (data) => ({
  type: TRANSFER_COLUMN,
  data,
});

// TASK CRUD

export const createNewTaskCreator = (data) => ({
  type: CREATE_NEW_TASK,
  data,
});

export const updateTaskCreator = (data) => ({
  type: UPDATE_TASK,
  data,
});

export const deleteTaskCreator = (data) => ({
  type: DELETE_TASK,
  data,
});

export const transferTaskCreator = (data) => ({
  type: TRANSFER_TASK,
  data,
});

export const cleanBoardCreator = () => ({ type: CLEAN_BOARD });
