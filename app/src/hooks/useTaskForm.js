import useForm from "./useForm";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { createNewTask } from "../redux/asyncActions/tasks/createdNewTask";
import { updateTask } from "../redux/asyncActions/tasks/updateTask";
import {
  buildUpdateBody,
  createErrorsArray,
} from "../pages/Task/TaskForm/helpers";
import { path } from "../Providers/path";

const init = {
  title: "",
  shortDescription: "",
  description: "",
};

export function useTaskForm(onClose, { task, columnId, columnIndex }) {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  const formSettings = useMemo(() => {
    const initData = task || init;

    if (columnIndex?.toString()) {
      initData.location = columnIndex.toString();
    }

    const settings = {
      initial: initData,
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
        const body = buildUpdateBody(values, String(columnIndex));
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
  }, [task, boardId, columnId, columnIndex]);

  const form = useForm(formSettings);

  return [form, createErrorsArray(form.errors)];
}
