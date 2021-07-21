export const loggerMiddleware = (store) => (next) => (action) => {
  let result;

  console.groupCollapsed("dispatching", action.type);
  console.log("PREVIOUS STATE: ", store.getState());
  console.log("ACTION: ", action);

  result = next(action);

  console.log("NEW STATE: ", store.getState());
  console.groupEnd();

  return result;
};
