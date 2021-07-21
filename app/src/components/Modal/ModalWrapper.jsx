import { TASK_MODAL } from "./contextType";
import { SingleTask } from "../../pages/Task/SingleTask/SingleTask";
import { findTaskAndColumnById } from "../../helpers/findTaskAndColumnById";

export function ModalWrapper({ type, modalData, ...rest }) {
  if (!type) {
    return null;
  }

  switch (type) {
    case TASK_MODAL:
      const [column, task] = findTaskAndColumnById(rest.board, modalData);
      return (
        <SingleTask {...rest} {...modalData} task={task} column={column} />
      );
    default:
      return null;
  }
}
