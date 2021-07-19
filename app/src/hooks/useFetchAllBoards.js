import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBoards } from "../redux/asyncActions/board/getAllBoards";

export function useFetchAllBoards() {
  const dispatch = useDispatch();
  const { boards, loading, error } = useSelector((state) => state.boards);

  useEffect(() => {
    dispatch(getAllBoards());
  }, []);

  return [boards, { loading, error }];
}
