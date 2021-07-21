import { Header } from "./Header";
import styles from "./styles.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
