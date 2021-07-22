import styles from "./styles.module.css";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
