import styles from "./styles.module.css";
import { useBoard } from "../../hooks/useBoard";
import { Column } from "./Column";
import { FormWrap } from "../../copmponents/FormWrap";
import { AddColumnForm } from "./AddColumnForm";
import { Wrap } from "./AddColumnForm/Wrap";

export function BoardPage() {
  const [board, { loading, error }] = useBoard();

  if (error) return <>{error}</>;
  if (loading) return <>loading</>;
  if (!board) return <>Sorry ou link invalid</>;

  return (
    <div className={styles.container}>
      {board.columns?.map((column) => (
        <Column key={column.id} {...column} />
      ))}

      <FormWrap text="NEW COLUMN" Form={AddColumnForm} Wrap={Wrap} />
    </div>
  );
}
