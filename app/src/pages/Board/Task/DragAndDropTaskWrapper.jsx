import styles from "./styles.module.css";
import cl from "../../../helpers/classname";
import { TaskHeader } from "./taskHeader";
import { useContext, useState } from "react";
import { DragAndDropContext } from "../../../Providers/DragAndDropProvider";
import target from "@iconify-icons/mdi/target";
import { throttle } from "../../../helpers/throttle";

export function DragAndDropTaskWrapper({
  children,
  task,
  taskIndex,
  columnIndex,
}) {
  const { onDragStart, onDragEnd, onDragOver, onDrop } =
    useContext(DragAndDropContext);
  const [isDrag, setIsDrag] = useState(false);

  return (
    <div
      className={cl(styles.wrap, (isDrag || task.isDrag) && styles.drag)}
      data-task={task.id}
      onDragLeave={throttle((e) => {
        const el = e.target.closest("div[data-task]");
        if (el) {
          el.style.paddingTop = "";
          el.style.paddingBottom = "";
        }
      })}
      onDragOver={throttle((e) => {
        e.preventDefault();
        const el = e.target.closest("div[data-task]");
        if (!el) return;

        const hoverBoundingRect = el.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset = e.clientY;
        const hoverClientY = clientOffset - hoverBoundingRect.top;

        if (taskIndex === 0 && hoverClientY < hoverMiddleY) {
          console.log("top");
          el.style.paddingTop = "100px";
          return;
        }

        if (hoverClientY > hoverMiddleY) {
          console.log("bottom");
          el.style.paddingBottom = "100px";
          return;
        }
      })}
    >
      <div
        draggable
        onDragStart={() => {
          setIsDrag(true);
          onDragStart({ columnIndex, taskIndex });
        }}
        onDragEnd={(e) => {
          setIsDrag(false);
          // onDragStart({ columnIndex, taskIndex });
        }}
        className={cl(styles.container, styles.top)}
      >
        <TaskHeader {...task} />
        <div className={"dndarea"} />
      </div>
      <div className={cl(styles.container, styles.bottom)}>{children}</div>
    </div>
  );
}

// hover(item, monitor) {
//
//
//   // if (dragIndex === hoverIndex) return;
//
//   const hoverBoundingRect = e.target.getBoundingClientRect();
//   const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//
//   const clientOffset = e.clientY;
//   const hoverClientY = clientOffset - hoverBoundingRect.top;
//
//   if (columnIndex === 0 && hoverClientY < hoverMiddleY) {
//     // margin-top
//     return;
//   }
//
//   if (hoverClientY > hoverMiddleY) {
//     // margin bottom
//     return;
//   }
//
//   // onMove(dragIndex, hoverIndex);
//
//   // item.index = hoverIndex;
// }
