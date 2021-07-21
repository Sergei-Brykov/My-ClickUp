import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { deleteColumn } from "../../../redux/asyncActions/columns/deleteColumn";
import { transferColumn } from "../../../redux/asyncActions/columns/transferColumn";

export function useColumnCrud({ column, columnIndex }) {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const [isFormOpen, setFormOpen] = useState(false);

  const onDelete = useCallback(
    () => dispatch(deleteColumn(boardId, column.id)),
    [column]
  );

  const onUpdate = useCallback(
    () => dispatch(deleteColumn(boardId, column)),
    [column]
  );

  const onTransfer = useCallback(
    (offset) => () => {
      dispatch(transferColumn(boardId, column.id, columnIndex, offset));
    },
    [column]
  );

  return {
    crudService: { onDelete, onUpdate, onTransfer },
    formService: {
      isFormOpen,
      openForm: () => setFormOpen(true),
      closeForm: () => setFormOpen(false),
    },
  };
}
