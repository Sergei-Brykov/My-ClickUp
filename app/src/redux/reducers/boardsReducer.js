const initialState = {
  boards: null,
  loading: true,
  error: "",
  isModal: null,
};

export const GET_ALL_BOARDS_REQUEST = "GET_ALL_BOARDS_REQUEST";
export const GET_ALL_BOARDS_RESPONSE = "GET_ALL_BOARDS_RESPONSE";
export const GET_ALL_BOARDS_REJECT = "GET_ALL_BOARDS_REJECT";

export const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOARDS_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_BOARDS_RESPONSE:
      return { error: "", loading: false, boards: action.data };

    case GET_ALL_BOARDS_REJECT:
      return { ...state, error: action.data };

    default:
      return state;
  }
};

export const getAllBoardRequest = () => ({ type: GET_ALL_BOARDS_REQUEST });

export const getAllBoardResponse = (boards) => ({
  type: GET_ALL_BOARDS_RESPONSE,
  data: boards,
});

export const getAllBoardReject = (error) => ({
  type: GET_ALL_BOARDS_REJECT,
  data: error,
});
