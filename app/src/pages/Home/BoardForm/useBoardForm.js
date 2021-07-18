import { useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import { createNewBoard } from "../../../redux/asyncActions/board/createNewBoard";
import { useMemo } from "react";
import { updateBoard } from "../../../redux/asyncActions/board/updateBoard";

export function useBoardForm(onClose, board) {
  const dispatch = useDispatch();

  const formSettings = useMemo(() => {
    let settings;

    if (board) {
      settings = {
        initial: board,
        onSubmit: (values) => {
          dispatch(updateBoard(values));
          onClose();
        },
      };
    } else {
      settings = {
        initial: { title: "" },
        onSubmit: (values) => {
          values.createdAt = Date.now();

          dispatch(createNewBoard(values));
          onClose();
        },
      };
    }

    settings.validate = function (values) {
      const error = {};

      if (values.title.length < 3) {
        error.title = "Project name is too short";
      }

      return error;
    };

    return settings;
  }, [board, onClose]);

  const form = useForm(formSettings);

  return [form, form.errors.title];
}
