import { useState } from "react";
import styles from "./styles.module.css";

export function FormWrap({ Form, Wrap = ({ children }) => children, text }) {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <Form onClose={() => setIsActive(false)} />
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
