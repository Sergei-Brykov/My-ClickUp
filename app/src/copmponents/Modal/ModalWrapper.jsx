import { TASK_MODAL } from "./contextType";
import { SingleTask } from "../../pages/Task/SingleTask";
import { findTaskAndColumnById } from "../../helpers/findTaskAndColumnById";

export function ModalWrapper({ context, ...rest }) {
  if (!context) {
    return null;
  }

  switch (context.type) {
    case TASK_MODAL:
      const [column, task] = findTaskAndColumnById(rest.board, context);
      return <SingleTask {...rest} {...context} task={task} column={column} />;
    default:
      return null;
  }
}
