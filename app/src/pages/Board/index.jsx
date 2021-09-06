import styles from './styles.module.css';
import { useFetchBoard } from '../../hooks/useFetchBoard';
import { Column } from './Column';
import { FormWrap } from '../../components/FormWrap';
import { ColumnForm } from './ColumnForm';
import { Wrap } from './ColumnForm/Wrap';
import { DragAndDropProvider } from '../../Providers/DragAndDropProvider';
import { ErrorLayout } from '../../components/ErrorLayout';
import { LoadingLayout } from '../../components/LoadingLayout';
import { Modal } from '../../components/Modal';
import { observer } from 'mobx-react';

export const BoardPage = observer(_BoardPage);

function _BoardPage() {
  const [board, { loading, error }] = useFetchBoard();

  if (error) return <ErrorLayout error={error} />;
  if (loading) return <LoadingLayout />;
  if (!board) return <></>;

  return (
    <div className={styles.container}>
      <Modal board={board} />
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
      <FormWrap text="NEW COLUMN" wrap={Wrap}>
        {({ onClose }) => <ColumnForm onClose={onClose} />}
      </FormWrap>
    </div>
  );
}
