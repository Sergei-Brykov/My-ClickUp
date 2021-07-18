import cl from "../../helpers/classname";
import styles from "./styles.module.css";

export function Button({ children, className = "", ...rest }) {
  return (
    <button className={cl(styles.root, className)} {...rest}>
      {children}
    </button>
  );
}
