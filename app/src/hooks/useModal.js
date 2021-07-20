import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { closeModalCreator } from "../redux/reducers/currentBoardReducer";

export function useModal() {
  const { isModal } = useSelector((state) => state.currentBoard);
  const dispatch = useDispatch();
  const closeModalHandler = useCallback(
    () => dispatch(closeModalCreator()),
    []
  );
  return [isModal, closeModalHandler];
}
