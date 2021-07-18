import styles from "./styles.module.css";

export function Column({ title, color }) {
  return (
    <div className={styles.columnWrap}>
      <div className={styles.column}>
        <div
          className={styles.header}
          style={{ borderTop: `4px solid ${color}` }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
