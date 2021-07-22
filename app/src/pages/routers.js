import { path } from "../Providers/path";
import { HomePage } from "./Home";
import { BoardPage } from "./Board";
import { MainSingleTask } from "./Task/SingleTask/MainSingleTask";

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
  {
    path: path.task(),
    exact: true,
    component: MainSingleTask,
  },
];
