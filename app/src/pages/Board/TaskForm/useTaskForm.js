import useForm from "../../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { createNewTask } from "../../../redux/asyncActions/tasks/createdNewTask";

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

        return errors;
      },
      onSubmit(values) {
        dispatch(createNewTask(boardId, columnId, values));
        onClose();
      },
    };

    return settings;
  }, [boardId, columnId]);

  const form = useForm(formSettings);

  return [form, form.errors];
}
