import { path } from "../Providers/path";
import { HomePage } from "./Home";
import { BoardPage } from "./Board";

export const routes = [
  {
    path: path.home(),
    exact: true,
    component: HomePage,
  },
  {
    path: path.board(),
    exact: true,
    component: BoardPage,
  },
];
