import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneBoard } from "../redux/asyncActions/board/getOneBoard";
import { cleanBoardCreator } from "../redux/reducers/currentBoardReducer";

export function useFetchBoard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { board, loading, error, isModal } = useSelector(
    (state) => state.currentBoard
  );

  useEffect(() => {
    dispatch(getOneBoard(id));

    return () => dispatch(cleanBoardCreator());
  }, []);

  return [board, { loading, error, id, isModal }];
}
