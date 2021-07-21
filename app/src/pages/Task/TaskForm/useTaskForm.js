import useForm from "../../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { createNewTask } from "../../../redux/asyncActions/tasks/createdNewTask";
import { updateTask } from "../../../redux/asyncActions/tasks/updateTask";

const initData = {
  title: "",
  shortDescription: "",
  description: "",
};

export function useTaskForm(onClose, { task, columnId, columnIndex }) {
  const { id: boardId } = useParams();
  const dispatch = useDispatch();

  const formSettings = useMemo(() => {
    const initData = task || initData;

    if (columnIndex) {
      initData.location = columnIndex;
    }

    const settings = {
      initial: initData,
      validate(values) {
        const errors = {};
        console.log(11);

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
        const body = buildUpdateBody(values, columnIndex);
        dispatch(updateTask(boardId, columnId, body));
        onClose();
      };
    } else {
      settings.onSubmit = (values) => {
        delete values.location;
        dispatch(createNewTask(boardId, columnId, values));
        onClose();
      };
    }

    return settings;
  }, [boardId, columnId, columnIndex]);

  const form = useForm(formSettings);

  return [form, createErrorsArray(form.errors)];
}

function buildUpdateBody(values, initialIndex) {
  let changeColumnIndex = null;

  if (values.location && values.location !== initialIndex) {
    changeColumnIndex = values.location;
  }

  delete values.location;
  const body = { newTask: values };

  if (changeColumnIndex) {
    body.changeColumnIndex = changeColumnIndex;
  }

  return body;
}

function createErrorsArray(errors) {
  return Object.entries(errors).map((error) => error[1]);
}
