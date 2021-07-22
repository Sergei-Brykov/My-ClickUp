import styles from "./styles.module.css";
import { useFetchBoard } from "../../../hooks/useFetchBoard";
import cl from "../../../helpers/classname";
import { SingleTask } from "./SingleTask";
import { useParams } from "react-router-dom";
import { findTaskAndColumnByTaskId } from "../../../helpers/findTaskAndColumnById";
import { LoadingLayout } from "../../../components/LoadingLayout";
import { ErrorLayout } from "../../../components/ErrorLayout";

export function MainSingleTask() {
  const [board, { loading, error }] = useFetchBoard();

  if (loading) return <LoadingLayout />;
  if (error) return <ErrorLayout error={error} />;
  if (!board) return <ErrorLayout error="This board din`t find" />;

  return <SingleTaskWrap board={board} />;
}

function SingleTaskWrap({ board }) {
  const { taskId } = useParams();
  // don`t use useMemo!!!
  const [column, task] = findTaskAndColumnByTaskId(board, taskId);

  if (!task) return <ErrorLayout error="This task deleted" />;

  return (
    <div className={cl(styles.wrap)}>
      <SingleTask
        board={board}
        column={column}
        task={task}
        columnId={column.id}
        taskId={taskId}
      />
    </div>
  );
}
