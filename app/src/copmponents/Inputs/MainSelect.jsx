import styles from "./styles.module.css";

export function MainSelect({ items, value, onChange, ...rest }) {
  return (
    <select {...rest} className={styles.select} onChange={onChange}>
      {items.map((item) => (
        <option selected={value === item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
}
