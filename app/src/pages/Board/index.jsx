import styles from "./styles.module.css";
import { useBoard } from "../../hooks/useBoard";
import { Column } from "./Column";
import { FormWrap } from "../../copmponents/FormWrap";
import { ColumnForm } from "./ColumnForm";
import { Wrap } from "./ColumnForm/Wrap";
import { DragAndDropProvider } from "../../Providers/DragAndDropProvider";

export function BoardPage() {
  const [board, { loading, error }] = useBoard();

  if (error) return <>{error}</>;
  if (loading) return <>loading</>;
  if (!board) return <>Sorry you link invalid</>;

  return (
    <div className={styles.container}>
      <DragAndDropProvider board={board}>
        {board.columns?.map((column, columnIndex) => (
          <Column
            key={column.id}
            columnIndex={columnIndex}
            column={column}
            isLast={columnIndex === board.columns.length - 1}
          />
        ))}
      </DragAndDropProvider>

      <FormWrap text="NEW COLUMN" Form={ColumnForm} Wrap={Wrap} />
    </div>
  );
}
