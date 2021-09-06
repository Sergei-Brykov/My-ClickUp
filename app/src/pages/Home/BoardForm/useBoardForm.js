import { useDispatch } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { createNewBoard } from '../../../redux/asyncActions/board/createNewBoard';
import { useMemo } from 'react';
import { updateBoard } from '../../../redux/asyncActions/board/updateBoard';
import { useInstance } from 'react-ioc';
import { BoardsInstance } from '../../../mobx/BoardsInstance';

export function useBoardForm(onClose, board) {
  const boardsInstance = useInstance(BoardsInstance);

  const formSettings = useMemo(() => {
    let settings;

    if (board) {
      settings = {
        initial: board,
        onSubmit: (values) => {
          boardsInstance.updateBoard(values);
          onClose();
        },
      };
    } else {
      settings = {
        initial: { title: '' },
        onSubmit: (values) => {
          values.createdAt = Date.now();
          boardsInstance.addNewBoard(values);
          onClose();
        },
      };
    }

    settings.validate = function (values) {
      const error = {};

      if (values.title.length < 3) {
        error.title = 'Project name is too short';
      }

      return error;
    };

    return settings;
  }, [board, onClose]);

  const form = useForm(formSettings);

  return [form, form.errors.title];
}
