import styles from "./styles.module.css";
import { useFetchBoard } from "../../../hooks/useFetchBoard";
import cl from "../../../helpers/classname";
import { SingleTask } from "./SingleTask";
import { useParams } from "react-router-dom";
import { findTaskAndColumnById } from "../../../helpers/findTaskAndColumnById";
import { LoadingLayout } from "../../../components/LoadingLayout";
import { ErrorLayout } from "../../../components/ErrorLayout";

export function SingleTaskWrap({}) {
  const [board, { loading, error }] = useFetchBoard();
  const { columnId, taskId } = useParams();

  if (loading) return <LoadingLayout />;
  if (error) return <ErrorLayout error={error} />;
  if (!board) return <ErrorLayout error={"yo"} />;

  const [column, task] = findTaskAndColumnById(board, {
    columnId,
    taskId,
  });

  if (!task) {
    return <LoadingLayout />;
  }

  return (
    <div className={cl(styles.wrap)}>
      <SingleTask
        board={board}
        column={column}
        task={task}
        columnId={columnId}
        taskId={taskId}
      />
    </div>
  );
}
