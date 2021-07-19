import { useMemo } from "react";
import styles from "../styles.module.css";
import { FormWrap } from "../../../../copmponents/FormWrap";
import { TaskForm } from "../../TaskForm/TaskForm";
import cl from "../../../../helpers/classname";

export function ColumnFooterWrap({ column, index }) {
  const context = useMemo(
    () => ({ columnId: column.id, columnIndex: index }),
    [column.id, index]
  );

  return (
    <div className={cl(styles.columnWrap, styles.grow)}>
      <FormWrap Form={TaskForm} text="NEW TASK" context={context} />
    </div>
  );
}
