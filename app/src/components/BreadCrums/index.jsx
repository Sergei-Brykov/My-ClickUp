import styles from "./style.module.css";

//TODO add .map logic and do Index universal component
export function BreadCrums({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.title}>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
