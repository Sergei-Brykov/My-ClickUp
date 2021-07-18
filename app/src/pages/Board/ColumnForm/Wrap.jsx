import styles from "./styles.module.css";

export const Wrap = ({ children }) => (
  <div className={styles.columnWrap}>
    <div className={styles.column}>{children}</div>
  </div>
);
