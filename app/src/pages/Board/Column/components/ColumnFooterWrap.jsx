import { useContext, useMemo, useRef } from "react";
import styles from "../styles.module.css";
import { FormWrap } from "../../../../copmponents/FormWrap";
import { TaskForm } from "../../TaskForm/TaskForm";
import cl from "../../../../helpers/classname";
import { DragAndDropContext } from "../../../../Providers/DragAndDropProvider";

function useDndFooter(columnIndex) {
  const { isDragAndDrop, onDragOverColumn } = useContext(DragAndDropContext);

  return {
    classes: isDragAndDrop ? "pointer-events" : "none",
    onDragOver: (e) => onDragOverColumn(e, columnIndex, "bottom", null),
  };
}

export function ColumnFooterWrap({ column, index, columnIndex }) {
  const { classes, onDragOver } = useDndFooter(columnIndex);

  const context = useMemo(
    () => ({ columnId: column.id, columnIndex: index }),
    [column.id, index]
  );

  return (
    <div
      onDragOver={onDragOver}
      className={cl(styles.columnWrap, styles.grow, classes)}
    >
      <FormWrap text="NEW TASK">
        {({ onClose }) => <TaskForm onClose={onClose} context={context} />}
      </FormWrap>
    </div>
  );
}
