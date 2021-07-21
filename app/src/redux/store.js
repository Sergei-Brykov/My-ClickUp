import { applyMiddleware, combineReducers, createStore } from "redux";
import { boardsReducer } from "./reducers/boardsReducer";
import thunk from "redux-thunk";
import { currentBoardReducer } from "./reducers/currentBoardReducer";
import { modalReducer } from "./reducers/modalReducer";

const rootReducer = combineReducers({
  boards: boardsReducer,
  currentBoard: currentBoardReducer,
  modal: modalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
