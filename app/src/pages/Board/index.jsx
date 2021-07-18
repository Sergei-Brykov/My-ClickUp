import styles from "./styles.module.css";
import { useBoard } from "../../hooks/useBoard";
import { Column } from "./Column";
import { FormWrap } from "../../copmponents/FormWrap";
import { ColumnForm } from "./ColumnForm";
import { Wrap } from "./ColumnForm/Wrap";

export function BoardPage() {
  const [board, { loading, error }] = useBoard();

  if (error) return <>{error}</>;
  if (loading) return <>loading</>;
  if (!board) return <>Sorry you link invalid</>;

  return (
    <div className={styles.container}>
      {board.columns?.map((column, index) => (
        <Column
          key={column.id}
          index={index}
          column={column}
          isLast={index === board.columns.length - 1}
        />
      ))}

      <FormWrap text="NEW COLUMN" Form={ColumnForm} Wrap={Wrap} />
    </div>
  );
}
