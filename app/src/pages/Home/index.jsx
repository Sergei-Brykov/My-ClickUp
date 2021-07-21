import styles from "./styles.module.css";
import { BoardForm } from "./BoardForm";
import { FormWrap } from "../../components/FormWrap";
import { BoardList } from "./BoardList";
import { useFetchAllBoards } from "../../hooks/useFetchAllBoards";
import { ErrorLayout } from "../../components/ErrorLayout";
import { LoadingLayout } from "../../components/LoadingLayout";

export function HomePage() {
  const [boards, { loading, error }] = useFetchAllBoards();

  if (error) return <ErrorLayout error={error} />;
  if (loading) return <LoadingLayout />;

  return (
    <div className={styles.container}>
      <h2>Project List:</h2>
      <BoardList boards={boards} />
      <FormWrap text="New Project">
        {({ onClose }) => <BoardForm onClose={onClose} />}
      </FormWrap>
    </div>
  );
}
