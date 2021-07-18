import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneBoard } from "../redux/asyncActions/board/getOneBoard";

export function useBoard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { board, loading, error } = useSelector((state) => state.currentBoard);

  useEffect(() => {
    dispatch(getOneBoard(id));

    return () => {};
  }, []);

  return [board, { loading, error, id }];
}
