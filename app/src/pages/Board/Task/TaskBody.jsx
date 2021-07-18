import styles from "./styles.module.css";
import { MainLabel } from "../../../copmponents/Inputs/MainLabel";
import { EditButton } from "../../../copmponents/Buttons/EditButton";
import { DeleterButton } from "../../../copmponents/Buttons/DeleterButton";

export function TaskBody({ shortDescription, id, openForm }) {
  return (
    <div className={styles.body}>
      <MainLabel>Description: </MainLabel>
      <div className={styles.description}>{shortDescription}</div>
      <div className={styles.btnWrap}>
        <EditButton onClick={openForm} />
        <DeleterButton onClick={openForm} />
        {/*<EditButton onClick={openForm} />*/}
      </div>
    </div>
  );
}
