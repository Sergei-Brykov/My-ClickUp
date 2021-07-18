import styles from "./styles.module.css";

export function ErrorView({ error }) {
  return error ? <div className={styles.root}>{error}</div> : null;
}
