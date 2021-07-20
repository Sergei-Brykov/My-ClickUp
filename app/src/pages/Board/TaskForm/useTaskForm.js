import useForm from "../../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { createNewTask } from "../../../redux/asyncActions/tasks/createdNewTask";
import { updateTask } from "../../../redux/asyncActions/tasks/updateTask";

const initData = {
  title: "",
  shortDescription: "",
};

export function useTaskForm(onClose, { task, columnId }) {
  const { id: boardId } = useParams();
  const dispatch = useDispatch();

  const formSettings = useMemo(() => {
    const settings = {
      initial: task || initData,
      validate(values) {
        const errors = {};

        if (values.title.length < 3) {
          errors.title = "Title is to short";
        }

        if (values.shortDescription.length < 10) {
          errors.shortDescription = "Description is to short";
        }

        return errors;
      },
    };

    if (task) {
      settings.onSubmit = (values) => {
        dispatch(updateTask(boardId, columnId, values));
        onClose();
      };
    } else {
      settings.onSubmit = (values) => {
        dispatch(createNewTask(boardId, columnId, values));
        onClose();
      };
    }

    return settings;
  }, [boardId, columnId]);

  const form = useForm(formSettings);

  return [form, createErrorsArray(form.errors)];
}

function createErrorsArray(errors) {
  return Object.entries(errors).map((error) => error[1]);
}
