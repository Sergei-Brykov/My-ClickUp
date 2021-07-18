import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllBoards } from "../redux/asyncActions/board/fetchAllBoards";

export function useFetchAllBoards() {
  const dispatch = useDispatch();
  const { boards, loading, error } = useSelector((state) => state.boards);

  useEffect(() => {
    dispatch(fetchAllBoards());
  }, []);

  return [boards, { loading, error }];
}
