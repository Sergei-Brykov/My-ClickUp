import { useContext, useRef, useState } from "react";
import { DragAndDropContext } from "../Providers/DragAndDropProvider";
import cl from "../helpers/classname";

export function useDragAndDropItem(columnIndex, taskIndex) {
  const ref = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const { isDragAndDrop, onDragStart, onDragOver, onDragLeave, onDragEnd } =
    useContext(DragAndDropContext);

  return {
    ref,
    // these classes are the same for the whole application, they can be concatenated because the cl function returns a string
    classes: {
      dragContainerClasses: cl(
        isDrag && "drag",
        isDragAndDrop && "pointer-events"
      ),
      dragDividerClasses: cl(
        "dropListener",
        // this is bugs fix = when the event does not have time to be processed and the element remains indented
        !isDragAndDrop && "drag-force-close"
      ),
    },
    actions: {
      onDragStart: () => {
        setIsDrag(true);
        onDragStart({ taskIndex, columnIndex });
      },
      onDragOver: (e) => {
        onDragOver(e, { taskIndex, columnIndex }, ref.current);
      },
      onDragLeave: (e) => onDragLeave(e, ref.current),
      onDragEnd: () => {
        setIsDrag(false);
        onDragEnd();
      },
    },
  };
}
