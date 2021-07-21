import cl from "../../helpers/classname";
import styles from "./styles.module.css";
import Icon from "@iconify/react";

export function IconButton({ icon, fontSize = "", onClick, isLeft = false }) {
  return (
    <div className={cl(styles.iconWrap, !isLeft && "ml")} onClick={onClick}>
      <Icon style={{ fontSize }} icon={icon} />
    </div>
  );
}
