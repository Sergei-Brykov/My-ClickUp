export const path = {
  home: () => "/",
  board: (boardId) => `/board/${boardId ? boardId : ":boardId"}`,
  task: (boardId, taskId) =>
    `/board/${boardId ? boardId : ":boardId"}/task/${
      taskId ? taskId : ":taskId"
    }`,
  error: () => "/error",
};
