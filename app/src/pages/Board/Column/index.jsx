import styles from "./styles.module.css";
import { useColumnCrud } from "./useColumnCrud";
import { ColumnHeaderWrap } from "./components/ColumnHeaderWrap";
import { ColumnBodyWrap } from "./components/ColumnBodyWrap";
import { ColumnFooterWrap } from "./components/ColumnFooterWrap";
import { useContext } from "react";
import { DragAndDropContext } from "../../../Providers/DragAndDropProvider";

export function Column(props) {
  const { crudService, formService } = useColumnCrud(props);

  return (
    <section data-column-id={props.column.id} className={styles.section}>
      <ColumnHeaderWrap crudService={crudService} {...formService} {...props} />
      <ColumnBodyWrap {...props} />
      <ColumnFooterWrap {...props} />
    </section>
  );
}
