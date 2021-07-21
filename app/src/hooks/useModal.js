import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { closeModalCreator } from "../redux/reducers/modalReducer";

export function useModal() {
  const { isModal, data, type } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeModalHandler = useCallback(
    () => dispatch(closeModalCreator()),
    []
  );
  return { isModal, modalData: data, type, closeModalHandler };
}
