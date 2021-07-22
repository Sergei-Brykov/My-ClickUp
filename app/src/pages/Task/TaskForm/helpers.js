export function buildUpdateBody(values, initialIndex) {
  let changeColumnIndex = null;

  if (values.location && values.location !== initialIndex) {
    changeColumnIndex = values.location;
  }

  delete values.location;
  const body = { newTask: values };

  if (changeColumnIndex) {
    body.changeColumnIndex = changeColumnIndex;
  }

  return body;
}

export function createErrorsArray(errors) {
  return Object.entries(errors).map((error) => error[1]);
}
