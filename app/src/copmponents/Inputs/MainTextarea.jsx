import styles from "./styles.module.css";

export function MainTextarea({ rows = 2, ...props }) {
  return <textarea rows={rows} className={styles.textarea} {...props} />;
}
