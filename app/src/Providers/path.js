export const path = {
  home: () => "/",
  board: (boardId) => `/board/${boardId ? boardId : ":id"}`,
  task: (boardId, columnId, taskId) =>
    `/task/${boardId ? boardId : ":boardId"}/${
      columnId ? columnId : ":columnId"
    }/${taskId ? taskId : ":taskId"}`,
  error: () => "/error",
};
