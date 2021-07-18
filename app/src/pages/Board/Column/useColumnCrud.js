import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { deleteColumn } from "../../../redux/asyncActions/columns/deleteColumn";
import { transferColumn } from "../../../redux/asyncActions/columns/transferColumn";

export function useColumnCrud(column, index) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isFormOpen, setFormOpen] = useState(false);

  const onDelete = useCallback(
    () => dispatch(deleteColumn(id, column.id)),
    [column]
  );

  const onUpdate = useCallback(
    () => dispatch(deleteColumn(id, column)),
    [column]
  );

  const onTransfer = useCallback(
    (offset) => () => {
      dispatch(transferColumn(id, column.id, index, offset));
    },
    [column]
  );

  return {
    crudApi: { onDelete, onUpdate, onTransfer },
    formApi: {
      isFormOpen,
      openForm: () => setFormOpen(true),
      closeForm: () => setFormOpen(false),
    },
  };
}
