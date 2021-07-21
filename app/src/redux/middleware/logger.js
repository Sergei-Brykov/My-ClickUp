export const loggerMiddleware = (store) => (next) => (action) => {
  let result;

  console.groupCollapsed("despatching", action);
  console.log("action", action);
  console.log("next", next);
  //
  // console.log("PREVIOUS STATE: ", store.getState());
  // console.log("ACTION: ", action);
  //
  result = next(action);
  //
  // console.log("NEW STATE: ", store.getState());
  console.groupEnd();

  return result;
};
