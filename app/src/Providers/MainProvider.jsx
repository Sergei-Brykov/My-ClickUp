import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function MainProvider({ children }) {
  return (
    <StrictMode>
      <Router>{children}</Router>
    </StrictMode>
  );
}
