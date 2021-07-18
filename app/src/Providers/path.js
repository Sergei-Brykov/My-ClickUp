export const path = {
  home: () => "/",
  board: (boardId) => `/board/${boardId ? boardId : ":id"}`,
  task: (taskId) => `/board/${taskId}`,
  error: () => "/error",
};
