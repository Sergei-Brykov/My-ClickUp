import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "../helpers/throttle";
import { isEqual } from "../helpers/isEqual";
import { onDragCreator } from "../redux/reducers/currentBoardReducer";
import { useParams } from "react-router-dom";
import { createNewTask } from "../server-api/localStorageServices/transferTask";

export const DragAndDropContext = React.createContext();
export const DragAndDropProvider = ({ children, board }) => {
  const { id } = useParams();
  const [dragged, setDragged] = useState(null);
  const [dropped, setDropped] = useState(null);
  const dispatch = useDispatch();

  const preventDefault = (e) => e.preventDefault();

  useEffect(() => {
    if (!dropped && !dragged) return;
    setDragged(dropped);
  }, [board]);

  const onDragStart = (e, columnIndex, taskIndex) => {
    // console.log("onDragStart");
    setDragged({ columnIndex, taskIndex });
  };

  const onDragEnd = (e, columnId, taskIndex) => {
    // console.log("onDragEnd");
    setDragged(null);
  };

  const onDragOver = throttle((e, columnIndex, taskIndex) => {
    // console.log("onDragOver");
    if (isEqual(dropped, { columnIndex, taskIndex })) return;
    setDropped({ columnIndex, taskIndex });
    e.stopPropagation();
  });

  const onDrop = (e) => {
    if (!dropped && !dragged) return;
    dispatch(createNewTask(id, { dragged, dropped }));
    // dispatch
  };

  const columnDragOver = (e, columnIndex) => {
    // const taskIndex = board.columns[columnIndex].tasks.length;
    //
    // console.log(isEqual(dropped, { columnIndex, taskIndex }), dropped, {
    //   columnIndex,
    //   taskIndex,
    // });
    // if (isEqual(dropped, { columnIndex, taskIndex })) return;
    //
    // setDropped({ columnIndex, taskIndex });
    // e.stopPropagation();
  };

  useEffect(() => {
    if (!dropped && !dragged) return;
    dispatch(onDragCreator({ dragged, dropped }));
  }, [dropped]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   if (!dropped && !dragged) return;
  //   setDragged(dropped);
  //   setDropped(null);
  // }, [board]);

  return (
    <DragAndDropContext.Provider
      value={{ onDragStart, onDragEnd, onDragOver, columnDragOver, onDrop }}
    >
      {children}
    </DragAndDropContext.Provider>
  );
};
