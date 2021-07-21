import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneBoard } from "../redux/asyncActions/board/getOneBoard";
import { cleanBoardCreator } from "../redux/reducers/currentBoardReducer";

export function useFetchBoard() {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { board, loading, error } = useSelector((state) => state.currentBoard);

  useEffect(() => {
    dispatch(getOneBoard(boardId));

    return () => dispatch(cleanBoardCreator());
  }, []);

  return [board, { loading, error, boardId }];
}
