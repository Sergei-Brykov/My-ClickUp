import { useContext, useRef } from "react";

import styles from "../styles.module.css";
import { ChevronButton } from "../../../../components/Buttons/ChevronButtons";
import { EditButton } from "../../../../components/Buttons/EditButton";
import { DeleterButton } from "../../../../components/Buttons/DeleterButton";
import { DragAndDropContext } from "../../../../Providers/DragAndDropProvider";
import cl from "../../../../helpers/classname";

function useDndHeader(columnIndex) {
  const { isDragAndDrop, onDragOverColumn, onDragLeave } =
    useContext(DragAndDropContext);
  const ref = useRef();

  return {
    ref,
    dragClasses: cl(styles.columnWrap, isDragAndDrop && "pointer-events"),
    onDragLeave: (e) => onDragLeave(e, ref.current),
    onDragOver: (e) => onDragOverColumn(e, columnIndex, "top", ref.current),
  };
}

export function ColumnHeader({
  title,
  color,
  tasks = [],
  openForm,
  onDelete,
  onTransfer,
  columnIndex,
  isLast,
}) {
  const { ref, onDragLeave, onDragOver } = useDndHeader(columnIndex);

  return (
    <div
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      className={styles.columnWrap}
    >
      <div className={styles.column}>
        <div
          className={styles.header}
          style={{ borderTop: `4px solid ${color}` }}
        >
          <div className={styles.title}>
            <div className={styles.titleWrap}>
              <span className={styles.spanTitle}>{title}</span>
              <div className={styles.count}>{tasks.length}</div>
            </div>
            <div style={{ color }} className={styles.plus}>
              +
            </div>
          </div>

          <div className={styles.btnWrap}>
            {columnIndex ? (
              <ChevronButton
                onClick={onTransfer(-1)}
                direction="left"
                leftExtreme
              />
            ) : (
              <div style={{ width: 25 }} />
            )}

            <EditButton onClick={openForm} />
            <DeleterButton onClick={onDelete} />

            {isLast ? (
              <div style={{ width: 25 }} />
            ) : (
              <ChevronButton onClick={onTransfer(1)} direction="right" />
            )}
          </div>
        </div>
      </div>
      <div ref={ref} className="dropListener" />
    </div>
  );
}
