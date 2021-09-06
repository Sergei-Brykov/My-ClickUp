import React, { useState } from 'react';
import { useInstance } from 'react-ioc';
import { throttle } from '../helpers/throttle';
import { isEqual } from '../helpers/isEqual';
import { useParams } from 'react-router-dom';
import { transferTask } from '../redux/asyncActions/tasks/transferTask';
import { BoardInstance } from '../mobx/BoardInstance';

export const DragAndDropContext = React.createContext();

export const DragAndDropProvider = ({ children, board }) => {
  const boardInstance = useInstance(BoardInstance);
  const [isDragAndDrop, setIsDragAndDrop] = useState(false);

  const [dragged, setDragged] = useState(null);
  const [dropped, setDropped] = useState(null);

  const { boardId } = useParams();

  const onDragStart = (newDragged) => {
    setIsDragAndDrop(true);
    setDragged(newDragged);
  };

  const onDragOver = throttle((e, newDropped, div) => {
    if (isEqual(newDropped, dragged)) {
      setDropped(null);
      return;
    }
    setDropped(newDropped);
    div && div.classList.add('drop');
  });

  const onDragOverColumn = throttle((e, columnIndex, context, div) => {
    const newDropped = buildNewDragged(context, board, columnIndex);
    if (isEqual(newDropped, dragged)) {
      setDropped(null);
      return;
    }
    setDropped(newDropped);
    div && div.classList.add('drop');
  });

  const onDragLeave = (e, div) => {
    div.classList.remove('drop');
  };

  const onDragEnd = () => {
    setIsDragAndDrop(false);
    if (!dragged || !dropped) return;
    boardInstance.transferTask(boardId, { dragged, dropped });
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
  if (context === 'top') {
    taskIndex = 0;
  } else {
    taskIndex = board.columns[columnIndex].tasks.length;
  }

  return { columnIndex, taskIndex };
};
