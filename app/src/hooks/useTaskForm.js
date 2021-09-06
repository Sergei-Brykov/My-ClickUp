import useForm from './useForm';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { buildUpdateBody, createErrorsArray } from '../pages/Task/TaskForm/helpers';
import { useInstance } from 'react-ioc';
import { BoardInstance } from '../mobx/BoardInstance';

const init = {
  title: '',
  shortDescription: '',
  description: '',
};

export function useTaskForm(onClose, { task, columnId, columnIndex }) {
  const { boardId } = useParams();
  const boardInstance = useInstance(BoardInstance);

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
          errors.title = 'Title is to short';
        }

        if (values.shortDescription.length < 10) {
          errors.shortDescription = 'Description is to short';
        }

        return errors;
      },
    };

    if (task) {
      settings.onSubmit = (values) => {
        const body = buildUpdateBody(values, String(columnIndex));
        boardInstance.updateTask(boardId, columnId, body);
        onClose();
      };
    } else {
      settings.onSubmit = (values) => {
        delete values.location;
        boardInstance.createNewTask(boardId, columnId, values);
        onClose();
      };
    }

    return settings;
  }, [task, boardId, columnId, columnIndex]);

  const form = useForm(formSettings);

  return [form, createErrorsArray(form.errors)];
}
