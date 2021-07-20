import { MainLabel } from "../../../copmponents/Inputs/MainLabel";
import styles from "./styles.module.css";
import { EditButton } from "../../../copmponents/Buttons/EditButton";
import { DeleterButton } from "../../../copmponents/Buttons/DeleterButton";
import { FullScreenButton } from "../../../copmponents/Buttons/FullScreenButton";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTask } from "../../../redux/asyncActions/tasks/deleteTask";
import { TASK_MODAL } from "../../../copmponents/Modal/contextType";
import { openModalCreator } from "../../../redux/reducers/currentBoardReducer";

function useTaskHandle(id, column) {
  const { id: boardId } = useParams();
  const dispatch = useDispatch();

  const deleteTaskHandler = useCallback(() => {
    dispatch(deleteTask(boardId, column.id, id));
  }, [id, column.id]);

  const openModalHandler = () => {
    dispatch(
      openModalCreator({ type: TASK_MODAL, taskId: id, columnId: column.id })
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
