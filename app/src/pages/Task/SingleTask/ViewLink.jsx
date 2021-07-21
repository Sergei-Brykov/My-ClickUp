import styles from "./styles.module.css";
import { CopyButton } from "../../../components/Buttons/CopyButton";

export function ViewLink({ divRef, link, path, copyHandler, id }) {
  return (
    <div id={id} className={styles.link}>
      <a className={styles.spanlink} target="_blank" href={path}>
        <span ref={divRef}>{link}</span>
      </a>
      <CopyButton onClick={() => copyHandler(link)} />
    </div>
  );
}
