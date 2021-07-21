export function buildUpdateBody(values, initialIndex) {
  let changeColumnIndex = null,
    isLocationChange = false;

  if (values.location && values.location !== initialIndex) {
    changeColumnIndex = values.location;
  }

  delete values.location;
  const body = { newTask: values };

  if (changeColumnIndex) {
    isLocationChange = true;
    body.changeColumnIndex = changeColumnIndex;
  }

  return [body, isLocationChange];
}

export function createErrorsArray(errors) {
  return Object.entries(errors).map((error) => error[1]);
}
