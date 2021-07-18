import styles from "../styles.module.css";
import cl from "../../../helpers/classname";

export function BoardListHeader() {
  return (
    <div className={styles.row}>
      <div className={cl(styles.boardTitle)}>Project title</div>
      <div className={styles.createdAt}>Created At</div>
      <div className={styles.settings}>Settings</div>
    </div>
  );
}