import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { deleteColumn } from '../../../redux/asyncActions/columns/deleteColumn';
import { transferColumn } from '../../../redux/asyncActions/columns/transferColumn';
import { updateColumn } from '../../../redux/asyncActions/columns/updateColumn';
import { useInstance } from 'react-ioc';
import { BoardInstance } from '../../../mobx/BoardInstance';

export function useColumnCrud({ column, columnIndex }) {
  const { boardId } = useParams();
  const [isFormOpen, setFormOpen] = useState(false);
  const boardInstance = useInstance(BoardInstance);

  const onDelete = useCallback(() => boardInstance.removeColumn(boardId, column.id), [column]);
  const onUpdate = useCallback(() => boardInstance.updateColumn(boardId, column), [column]);

  const onTransfer = useCallback(
    (offset) => () => boardInstance.transferColumn(boardId, column.id, columnIndex, offset),
    [column, columnIndex]
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
