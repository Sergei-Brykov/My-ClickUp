import styles from "./styles.module.css";
import cl from "../../helpers/classname";

export function MainLabel({ children, htmlFor, fontSize = "", mt = false }) {
  return (
    <div className={cl(mt && "mt-2")}>
      <label style={{ fontSize }} htmlFor={htmlFor} className={styles.label}>
        {children}
      </label>
    </div>
  );
}
