import styles from "./styles.module.css";
import { BoardForm } from "./BoardForm";
import { FormWrap } from "../../components/FormWrap";
import { BoardList } from "./BoardList";
import { useFetchAllBoards } from "../../hooks/useFetchAllBoards";
import { Layout } from "../../components/Layout";

export function HomePage() {
  const [boards, { loading, error }] = useFetchAllBoards();

  if (error) return <>{error}</>;
  if (loading) return <>...loading</>;

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Project List:</h2>
        <BoardList boards={boards} />
        <FormWrap text="New Project">
          {({ onClose }) => <BoardForm onClose={onClose} />}
        </FormWrap>
      </div>
    </Layout>
  );
}
