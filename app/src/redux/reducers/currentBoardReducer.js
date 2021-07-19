import { buildNewBoard } from "./transferTaskHelpers";

const initialState = {
  board: null,
  loading: true,
  error: "",
  isDrag: false,
};

export const GET_BOARD_REQUEST = "GET_BOARD_REQUEST";
export const GET_BOARD_RESPONSE = "GET_BOARD_RESPONSE";
export const GET_BOARD_REJECT = "GET_BOARD_REJECT";

export const ON_DRAG = "ON_DRAG";

export const currentBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_REQUEST:
      return { ...state, loading: true };

    case GET_BOARD_RESPONSE:
      return { error: "", loading: false, board: action.data };

    case GET_BOARD_REJECT:
      return { ...state, error: action.data };

    case ON_DRAG:
      const board = buildNewBoard(state.board, action.data);
      return { ...state, board };

    default:
      return state;
  }
};

export const getOneBoardRequest = () => ({ type: GET_BOARD_REQUEST });

export const getOneBoardResponse = (board) => ({
  type: GET_BOARD_RESPONSE,
  data: board,
});

export const getOneBoardReject = (error) => ({
  type: GET_BOARD_REJECT,
  data: error,
});

export const onDragCreator = (data) => ({ type: ON_DRAG, data });
