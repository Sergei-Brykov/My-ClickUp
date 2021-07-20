import { TASK_MODAL } from "./contextType";

function SingleTask() {
  return null;
}

export function ModalWrapper({ context, ...rest }) {
  if (!context) {
    return null;
  }

  switch (context.type) {
    case TASK_MODAL:
      return <SingleTask {...rest} />;
    default:
      return null;
  }
}
