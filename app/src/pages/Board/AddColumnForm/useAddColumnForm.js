import { useMemo } from "react";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createNewColumn } from "../../../redux/asyncActions/columns/createNewColumn";

export function useAddColumnForm(onClose) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const formSettings = useMemo(() => {
    return {
      initial: {
        title: "",
        color: "#801300",
      },
      validate(values) {
        const errors = {};

        if (values.title.length < 3) {
          errors.title = "Name is to shot";
        }

        return errors;
      },
      onSubmit(values) {
        values.createdAt = Date.now();

        dispatch(createNewColumn(id, values));
        onClose();
      },
    };
  }, [onClose]);

  const form = useForm(formSettings);

  return [form, form.errors.title];
}
