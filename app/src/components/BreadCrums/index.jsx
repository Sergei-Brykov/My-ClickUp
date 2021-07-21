import styles from "./style.module.css";

export function BreadCrums({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.title}>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
