import cl from "../../helpers/classname";
import styles from "./styles.module.css";

export function MainInput({ className, ...props }) {
  return <input className={cl(styles.input, className)} {...props} />;
}
