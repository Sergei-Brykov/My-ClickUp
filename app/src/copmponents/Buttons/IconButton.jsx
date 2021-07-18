import cl from "../../helpers/classname";
import styles from "./styles.module.css";

export function IconButton({ children, onClick, isLeft = false }) {
  return (
    <div className={cl(styles.iconWrap, !isLeft && "ml")} onClick={onClick}>
      {children}
    </div>
  );
}
