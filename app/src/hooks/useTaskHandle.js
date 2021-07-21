import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { deleteTask } from "../redux/asyncActions/tasks/deleteTask";
import { openModalCreator } from "../redux/reducers/modalReducer";
import { TASK_MODAL } from "../components/Modal/contextType";
import { path } from "../Providers/path";

export function useTaskHandle(taskId, column, onClose = () => void 0) {
  const { boardId, taskId: isTaskInSinglePage } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteTaskHandler = useCallback(() => {
    dispatch(deleteTask(boardId, column.id, taskId));
    if (isTaskInSinglePage) {
      history.push(path.board(boardId));
      return;
    }
    onClose();
  }, [taskId, column.id]);

  const openModalHandler = () => {
    dispatch(
      openModalCreator({
        type: TASK_MODAL,
        data: { taskId, columnId: column.id },
      })
    );
  };

  return [deleteTaskHandler, openModalHandler];
}
