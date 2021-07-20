import styles from "./styles.module.css";
import Icon from "@iconify/react";
import closeIcon from "@iconify-icons/mdi/close";

export function CloseButton({ onClick, leftExtreme = false, size: fontSize }) {
  return (
    <div onClick={onClick} className={styles.closebtn}>
      <Icon style={{ fontSize }} icon={closeIcon} />
    </div>
  );
}
