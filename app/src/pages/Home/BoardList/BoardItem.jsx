import { Link } from "react-router-dom";
import { path } from "../../../Providers/path";
import cl from "../../../helpers/classname";
import styles from "../styles.module.css";
import { normalizeTime } from "../../../helpers/normalizeTime";
import { Icon } from "@iconify/react";
import pencilIcon from "@iconify-icons/mdi-light/pencil";
import deleteIcon from "@iconify-icons/mdi-light/delete";
import { useCallback, useState } from "react";
import { BoardForm } from "../BoardForm";
import { useDispatch } from "react-redux";
import { deleteBoard } from "../../../redux/asyncActions/deleteBoard";

export function BoardItem(board) {
  const { isFormOpen, stopEvent, openForm, closeForm, onDelete } = useBoardItem(
    board.id
  );

  if (isFormOpen) {
    return <BoardForm board={board} onClose={closeForm} />;
  }

  const { id, createdAt, title } = board;
  return (
    <Link to={path.board(id)}>
      <div className={cl(styles.boardItem, styles.row)}>
        <div className={styles.boardTitle}>{title}</div>
        <div className={cl(styles.createdAt, styles.border)}>
          {normalizeTime(createdAt)}
        </div>
        <div onClick={stopEvent} className={cl(styles.settings, styles.border)}>
          <div className={cl(styles.iconWrap, "ml")} onClick={openForm}>
            <Icon icon={pencilIcon} />
          </div>
          <div className={cl(styles.iconWrap, "ml")} onClick={onDelete}>
            <Icon icon={deleteIcon} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function useBoardItem(id) {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stopEvent = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const openForm = useCallback((e) => setIsFormOpen(true), []);
  const closeForm = useCallback((e) => setIsFormOpen(false), []);

  const onDelete = useCallback((e) => dispatch(deleteBoard(id)), []);

  return { isFormOpen, stopEvent, openForm, closeForm, onDelete };
}
