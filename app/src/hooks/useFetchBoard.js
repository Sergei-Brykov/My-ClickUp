import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOneBoard } from '../redux/asyncActions/board/getOneBoard';
import { cleanBoardCreator } from '../redux/reducers/currentBoardReducer';
import { useInstance } from 'react-ioc';
import { BoardInstance } from '../mobx/BoardInstance';

export function useFetchBoard() {
  const { boardId } = useParams();
  const boardInstance = useInstance(BoardInstance);

  useEffect(() => {
    boardInstance.init(boardId);
  }, []);

  const { board, loading, error } = boardInstance;

  return [board, { loading, error, boardId }];
}
