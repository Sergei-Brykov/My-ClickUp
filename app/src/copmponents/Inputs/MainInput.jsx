import cl from "../../helpers/classname";
import styles from "./styles.module.css";

export function MainInput({ inputRef = null, className = "", ...props }) {
  return (
    <input ref={inputRef} className={cl(styles.input, className)} {...props} />
  );
}
