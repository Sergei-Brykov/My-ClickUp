import { useMemo } from "react";

import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createNewColumn } from "../../../redux/asyncActions/columns/createNewColumn";
import { updateColumn } from "../../../redux/asyncActions/columns/updateColumn";

const init = {
  title: "",
  color: "#801300",
};

export function useAddColumnForm(onClose, column) {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  const formSettings = useMemo(() => {
    let settings = {
      initial: column || init,
      validate(values) {
        const errors = {};

        if (values.title.length < 3) {
          errors.title = "Name is to shot";
        }

        return errors;
      },
    };

    if (column) {
      settings.onSubmit = (values) => {
        dispatch(updateColumn(boardId, values));
        onClose();
      };
    } else {
      settings.onSubmit = (values) => {
        values.createdAt = Date.now();

        dispatch(createNewColumn(boardId, values));
        onClose();
      };
    }

    return settings;
  }, [column, onClose]);

  const form = useForm(formSettings);

  return [form, form.errors.title];
}
