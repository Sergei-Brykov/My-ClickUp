import cl from "../../helpers/classname";
import styles from "./styles.module.css";

export function Button({
  children,
  className = "",
  secondary = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={cl(styles.root, secondary && styles.secondary, className)}
    >
      {children}
    </button>
  );
}
