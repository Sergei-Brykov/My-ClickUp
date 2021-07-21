import styles from "./styles.module.css";
import Icon from "@iconify/react";
import check from "@iconify-icons/mdi/check-bold";

export function CheckedButton({ color, onClick = () => {}, size: fontSize }) {
  return (
    <div onClick={onClick} className={styles.checked}>
      <Icon style={{ fontSize, color }} icon={check} />
    </div>
  );
}
