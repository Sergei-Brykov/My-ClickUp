import styles from "./styles.module.css";
import cl from "../../helpers/classname";

export function MainLabel({
  title,
  children,
  htmlFor,
  size: fontSize = "",
  mt = false,
}) {
  return (
    <div className={cl(mt && "mt-2")}>
      <label style={{ fontSize }} htmlFor={htmlFor} className={styles.label}>
        {title || children}
      </label>
    </div>
  );
}
