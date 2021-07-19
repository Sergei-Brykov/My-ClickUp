import styles from "../styles.module.css";
import { ChevronButton } from "../../../../copmponents/Buttons/ChevronButtons";
import { EditButton } from "../../../../copmponents/Buttons/EditButton";
import { DeleterButton } from "../../../../copmponents/Buttons/DeleterButton";

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
  return (
    <div className={styles.columnWrap}>
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
    </div>
  );
}
