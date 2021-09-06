import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import cl from '../../../helpers/classname';
import styles from '../styles.module.css';
import { normalizeTime } from '../../../helpers/normalizeTime';
import { path } from '../../../Providers/path';
import { BoardForm } from '../BoardForm';
import { deleteBoard } from '../../../redux/asyncActions/board/deleteBoard';
import { EditButton } from '../../../components/Buttons/EditButton';
import { DeleterButton } from '../../../components/Buttons/DeleterButton';
import { useInstance } from 'react-ioc';
import { BoardsInstance } from '../../../mobx/BoardsInstance';
import { observer } from 'mobx-react';

function useBoardItem(id) {
  const boardInstance = useInstance(BoardsInstance);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stopEvent = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const openForm = useCallback((e) => setIsFormOpen(true), []);
  const closeForm = useCallback((e) => setIsFormOpen(false), []);
  const onDelete = useCallback((e) => boardInstance.removeBoard(id), []);

  return { isFormOpen, stopEvent, openForm, closeForm, onDelete };
}

export const BoardItem = observer(function _BoardItem(board) {
  const { isFormOpen, stopEvent, openForm, closeForm, onDelete } = useBoardItem(board.id);

  if (isFormOpen) {
    return <BoardForm board={board} onClose={closeForm} />;
  }

  const { id, createdAt, title } = board;
  return (
    <Link to={path.board(id)}>
      <div className={cl(styles.boardItem, styles.row)}>
        <div className={styles.boardTitle}>{title}</div>
        <div className={cl(styles.createdAt, styles.border)}>{normalizeTime(createdAt)}</div>
        <div onClick={stopEvent} className={cl(styles.settings, styles.border)}>
          <EditButton onClick={openForm} />
          <DeleterButton onClick={onDelete} />
        </div>
      </div>
    </Link>
  );
});
