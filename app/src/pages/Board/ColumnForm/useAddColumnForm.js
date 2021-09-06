import { useMemo } from 'react';

import useForm from '../../../hooks/useForm';
import { useParams } from 'react-router-dom';
import { useInstance } from 'react-ioc';
import { BoardInstance } from '../../../mobx/BoardInstance';

const init = {
  title: '',
  color: '#801300',
};

export function useAddColumnForm(onClose, column) {
  const { boardId } = useParams();
  const boardInstance = useInstance(BoardInstance);

  const formSettings = useMemo(() => {
    let settings = {
      initial: column || init,
      validate(values) {
        const errors = {};

        if (values.title.length < 3) {
          errors.title = 'Name is to shot';
        }

        return errors;
      },
    };

    if (column) {
      settings.onSubmit = (values) => {
        boardInstance.updateColumn(boardId, values);
        onClose();
      };
    } else {
      settings.onSubmit = (values) => {
        values.createdAt = Date.now();

        boardInstance.createNewColumn(boardId, values);
        onClose();
      };
    }

    return settings;
  }, [column, onClose]);

  const form = useForm(formSettings);

  return [form, form.errors.title];
}
