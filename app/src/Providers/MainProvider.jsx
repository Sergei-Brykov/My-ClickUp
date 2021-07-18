import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../redux/store";

export function MainProvider({ children }) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </StrictMode>
  );
}
