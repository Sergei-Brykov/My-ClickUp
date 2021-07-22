import styles from "./styles.module.css";

export function MainSelect({ items, value, onSelect, onChange, ...rest }) {
  return (
    <select
      {...rest}
      defaultValue={value}
      className={styles.select}
      onSelect={onSelect}
      onChange={onChange}
    >
      {items.map((item, idx) => (
        <option key={idx} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
}
