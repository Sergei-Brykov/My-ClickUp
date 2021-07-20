import { Header } from "./Header";
import styles from "./styles.module.css";
import { Modal } from "../Modal";

export function Layout({ children, ...rest }) {
  return (
    <div className={styles.main}>
      <Modal {...rest} />
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
