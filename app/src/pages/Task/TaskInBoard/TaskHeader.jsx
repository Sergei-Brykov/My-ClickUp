import styles from "./styles.module.css";
import { MainLabel } from "../../../components/Inputs/MainLabel";
import { EditButton } from "../../../components/Buttons/EditButton";
import { DeleterButton } from "../../../components/Buttons/DeleterButton";
import { FullScreenButton } from "../../../components/Buttons/FullScreenButton";
import { useTaskHandle } from "../../../hooks/useTaskHandle";

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
