import styles from "./styles.module.css";
import { BoardForm } from "./BoardForm";
import { FormWrap } from "../../copmponents/FormWrap";
import { BoardList } from "./BoardList";
import { useFetchAllBoards } from "../../hooks/useFetchAllBoards";

export function HomePage() {
  const [boards, { loading, error }] = useFetchAllBoards();

  if (error) return <>{error}</>;
  if (loading) return <>...loading</>;

  return (
    <div className={styles.container}>
      <h2>Project List:</h2>
      <BoardList boards={boards} />
      <FormWrap Form={BoardForm} text="New Project" />
    </div>
  );
}
