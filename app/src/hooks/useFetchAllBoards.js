// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { useInstance } from 'react-ioc';
import { useEffect } from 'react';
import { getAllBoards } from '../redux/asyncActions/board/getAllBoards';
import { BoardsInstance } from '../mobx/BoardsInstance';

export function useFetchAllBoards() {
  const boardsInstance = useInstance(BoardsInstance);
  console.log(boardsInstance);

  useEffect(() => {
    boardsInstance.init();
  }, []);

  const { boards, loading, error } = boardsInstance;

  return [boards, { loading, error }];
}
