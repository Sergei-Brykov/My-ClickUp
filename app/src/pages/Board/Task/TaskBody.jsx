import styles from "./styles.module.css";
import { MainLabel } from "../../../copmponents/Inputs/MainLabel";

export function TaskBody({ shortDescription, id, openForm }) {
  return (
    <div className={styles.body}>
      <MainLabel>Description: </MainLabel>
      <div className={styles.description}>{shortDescription}</div>
    </div>
  );
}
