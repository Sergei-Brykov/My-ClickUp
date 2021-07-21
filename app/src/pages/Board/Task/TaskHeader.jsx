import { MainLabel } from "../../../components/Inputs/MainLabel";
import styles from "./styles.module.css";
import { EditButton } from "../../../components/Buttons/EditButton";
import { DeleterButton } from "../../../components/Buttons/DeleterButton";
import { FullScreenButton } from "../../../components/Buttons/FullScreenButton";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTask } from "../../../redux/asyncActions/tasks/deleteTask";
import { TASK_MODAL } from "../../../components/Modal/contextType";
import { openModalCreator } from "../../../redux/reducers/modalReducer";

function useTaskHandle(id, column) {
  const { id: boardId } = useParams();
  const dispatch = useDispatch();

  const deleteTaskHandler = useCallback(() => {
    dispatch(deleteTask(boardId, column.id, id));
  }, [id, column.id]);

  const openModalHandler = () => {
    dispatch(
      openModalCreator({
        type: TASK_MODAL,
        data: { taskId: id, columnId: column.id },
      })
    );
  };

  return [deleteTaskHandler, openModalHandler];
}

export function TaskHeader({ title, column, id, openForm }) {
  const [deleteTaskHandler, openModalHandler] = useTaskHandle(id, column);

  return (
    <div>
      <div className={styles.header}>
        <MainLabel>Task id: {id} </MainLabel>

        <div className={styles.btnWrap}>
          <EditButton onClick={openForm} />
          <DeleterButton onClick={deleteTaskHandler} />
          <FullScreenButton onClick={openModalHandler} />
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
