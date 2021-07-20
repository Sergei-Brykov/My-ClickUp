const initialState = {
  isModal: null,
  type: null,
  data: null,
};

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...action.data, isModal: true };
    case CLOSE_MODAL:
      return { type: null, data: null, isModal: null };

    default:
      return state;
  }
};

export const openModalCreator = (data) => ({ type: OPEN_MODAL, data });
export const closeModalCreator = () => ({ type: CLOSE_MODAL });
