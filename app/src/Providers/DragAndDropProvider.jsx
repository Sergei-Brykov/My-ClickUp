import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "../helpers/throttle";
import { isEqual } from "../helpers/isEqual";
import { onDragCreator } from "../redux/reducers/currentBoardReducer";
import { useParams } from "react-router-dom";
import { transferTask } from "../redux/asyncActions/tasks/transferTask";

export const DragAndDropContext = React.createContext();

export const DragAndDropProvider = ({ children, board }) => {
  const { id } = useParams();
  const [dragged, setDragged] = useState(null);
  const [dropped, setDropped] = useState(null);

  const onDragStart = (dragged) => {
    setDragged(dragged);
  };

  const onDragOver = () => {};

  return (
    <DragAndDropContext.Provider value={{ onDragStart }}>
      {children}
    </DragAndDropContext.Provider>
  );
};

const copyObj = (obj) => JSON.parse(JSON.stringify(obj));
