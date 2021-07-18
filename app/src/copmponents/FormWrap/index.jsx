import { useState } from "react";
import styles from "./styles.module.css";

export function FormWrap({ Form, text }) {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <Form onClose={() => setIsActive(false)} />
  ) : (
    <OpenFormView onOpen={() => setIsActive(true)} text={text} />
  );
}

function OpenFormView({ onOpen, text }) {
  return (
    <div className={styles.openFormWrap}>
      <span onClick={onOpen}>+ {text}</span>
    </div>
  );
}
