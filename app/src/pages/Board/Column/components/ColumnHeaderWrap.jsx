import { ColumnForm } from "../../ColumnForm";
import { ColumnHeader } from "./ColumnHeader";

export function ColumnHeaderWrap({
  crudService,
  isFormOpen,
  closeForm,
  openForm,
  column,
  columnIndex,
  isLast,
}) {
  return isFormOpen ? (
    <ColumnForm column={column} onClose={closeForm} />
  ) : (
    <ColumnHeader
      {...column}
      {...crudService}
      columnIndex={columnIndex}
      isLast={isLast}
      openForm={openForm}
    />
  );
}
