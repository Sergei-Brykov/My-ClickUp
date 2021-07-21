import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { boardsReducer } from "./reducers/boardsReducer";
import { currentBoardReducer } from "./reducers/currentBoardReducer";
import { modalReducer } from "./reducers/modalReducer";
import { loggerMiddleware } from "./middleware/logger";

const rootReducer = combineReducers({
  boards: boardsReducer,
  currentBoard: currentBoardReducer,
  modal: modalReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunk)
);
