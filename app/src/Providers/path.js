export const path = {
  home: () => "/",
  board: (boardId) => `/board/${boardId ? boardId : ":id"}`,
  task: (boardId, columnId, taskId) =>
    `/board/${boardId ? boardId : ":boardId"}/column/${
      columnId ? columnId : ":columnId"
    }/task/${taskId ? taskId : ":taskId"}`,
  error: () => "/error",
};
