import styles from "./styles.module.css";
import { ColumnForm } from "../ColumnForm";
import { ColumnHeader } from "./ColumnHeader";
import { useColumnCrud } from "./useColumnCrud";
import { FormWrap } from "../../../copmponents/FormWrap";
import { TaskForm } from "../TaskForm/TaskForm";
import { useMemo } from "react";
import { Task } from "../Task";

export function Column({ column, index, isLast }) {
  const { crudApi, formApi } = useColumnCrud(column, index);

  const context = useMemo(
    () => ({ columnId: column.id, columnIndex: index }),
    [column.id, index]
  );

  return (
    <section>
      {formApi.isFormOpen ? (
        <ColumnForm column={column} onClose={formApi.closeForm} />
      ) : (
        <ColumnHeader
          {...column}
          {...crudApi}
          index={index}
          isLast={isLast}
          openForm={formApi.openForm}
        />
      )}

      {column.tasks.map((task, index) => (
        <Task task={task} index={index} column={column} />
      ))}

      <div className={styles.columnWrap}>
        <FormWrap Form={TaskForm} text="NEW TASK" context={context} />
      </div>
    </section>
  );
}
