import styles from "./style.module.css";

//TODO add .map logic and do Index universal component
export function BreadCrums({ board, column, task }) {
  return (
    <h2 className={styles.container}>
      <span>{board.title}</span>
      {" / "}
      <span>{column.title}</span>
      {" / "}
      <span>{task.title}</span>
    </h2>
  );
}
