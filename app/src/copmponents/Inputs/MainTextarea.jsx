import styles from "./styles.module.css";

export function MainTextarea({ rows = 3, ...props }) {
  return <textarea rows={rows} className={styles.textarea} {...props} />;
}
