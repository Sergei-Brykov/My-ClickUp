import styles from "./styles.module.css";
import cl from "../../../helpers/classname";
import { TaskHeader } from "./taskHeader";
import { throttle } from "../../../helpers/throttle";

export function DragAndDropTaskWrapper({ children, task, column, index }) {
  return (
    <div className={styles.wrap}>
      <div
        draggable
        onDragOver={throttle((e) => {})}
        onDragLeave={(e) => {}}
        onDragStart={(e) => {}}
        onDragEnd={(e) => {}}
        onDrop={(e) => {}}
        className={cl(styles.container, styles.top)}
      >
        <TaskHeader {...task} />
      </div>
      <div className={cl(styles.container, styles.bottom)}>{children}</div>
    </div>
  );
}
