import { useState, Fragment } from "react";
import styles from "./styles.module.css";

export function FormWrap({ wrap: Wrap = Fragment, text, children }) {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    children({ onClose: () => setIsActive(false) })
  ) : (
    <Wrap>
      <OpenFormView onOpen={() => setIsActive(true)} text={text} />
    </Wrap>
  );
}

function OpenFormView({ onOpen, text }) {
  return (
    <div className={styles.openFormWrap}>
      <span onClick={onOpen}>+ {text}</span>
    </div>
  );
}
