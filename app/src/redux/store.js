import { applyMiddleware, combineReducers, createStore } from "redux";
import { boardsReducer } from "./reducers/boardsReducer";
import thunk from "redux-thunk";
import { currentBoardReducer } from "./reducers/currentBoardReducer";

const rootReducer = combineReducers({
  boards: boardsReducer,
  currentBoard: currentBoardReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
