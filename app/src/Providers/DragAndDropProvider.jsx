import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "../helpers/throttle";
import { isEqual } from "../helpers/isEqual";
import { onDragCreator } from "../redux/reducers/currentBoardReducer";
import { useParams } from "react-router-dom";
import { transferTask } from "../redux/asyncActions/tasks/transferTask";

export const DragAndDropContext = React.createContext();

export const DragAndDropProvider = ({ children, board }) => {
  const [isDragAndDrop, setIsDragAndDrop] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dragged, setDragged] = useState(null);
  const [dropped, setDropped] = useState(null);

  const onDragStart = (newDragged) => {
    setIsDragAndDrop(true);
    setDragged(newDragged);
  };

  const onDragOver = throttle((e, newDropped, div) => {
    if (isEqual(newDropped, dragged)) return;
    setDropped(newDropped);
    div && div.classList.add("drop");
  });

  const onDragOverColumn = throttle((e, columnIndex, context, div) => {
    const newDropped = buildNewDragged(context, board, columnIndex);
    if (isEqual(newDropped, dragged)) return;
    setDropped(newDropped);
    div && div.classList.add("drop");
  });

  const onDragLeave = (e, div) => {
    div.classList.remove("drop");
  };

  const onDragEnd = () => {
    setIsDragAndDrop(false);
    if (!dragged || !dropped) return;
    dispatch(transferTask(id, { dragged, dropped }));
    setDropped(null);
  };

  return (
    <DragAndDropContext.Provider
      value={{
        isDragAndDrop,
        onDragStart,
        onDragOver,
        onDragLeave,
        onDragEnd,
        onDragOverColumn,
      }}
    >
      {children}
    </DragAndDropContext.Provider>
  );
};

const buildNewDragged = (context, board, columnIndex) => {
  let taskIndex;
  if (context === "top") {
    taskIndex = 0;
  } else {
    taskIndex = board.columns[columnIndex].tasks.length - 1;
  }

  return { columnIndex, taskIndex };
};
