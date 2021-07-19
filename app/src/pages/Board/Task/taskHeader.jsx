import { MainLabel } from "../../../copmponents/Inputs/MainLabel";
import styles from "./styles.module.css";

export function TaskHeader({ title, id, openForm }) {
  return (
    <div>
      <MainLabel>Task id: {id} </MainLabel>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
