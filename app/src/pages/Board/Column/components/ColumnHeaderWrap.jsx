import { ColumnForm } from '../../ColumnForm';
import { ColumnHeader } from './ColumnHeader';
import { observer } from 'mobx-react';

export const ColumnHeaderWrap = observer(_ColumnHeaderWrap);

function _ColumnHeaderWrap({ crudService, isFormOpen, closeForm, openForm, column, columnIndex, isLast }) {
  return isFormOpen ? (
    <ColumnForm column={column} onClose={closeForm} />
  ) : (
    <ColumnHeader {...column} {...crudService} columnIndex={columnIndex} isLast={isLast} openForm={openForm} />
  );
}
