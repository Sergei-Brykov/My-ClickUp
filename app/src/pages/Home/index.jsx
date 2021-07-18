import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import styles from "./styles.module.css";
import { BoardForm } from "./BoardForm";
import { FormWrap } from "../../copmponents/FormWrap";
import { fetchAllBoards } from "../../redux/asyncActions/fetchAllBoards";
import { BoardList } from "./BoardList";

export function HomePage() {
  const [boards, { loading, error }] = useFetchAllBoards();

  if (error) return <>{error}</>;
  if (loading) return <>...loading</>;

  return (
    <div className={styles.container}>
      <h2>Project List:</h2>
      <BoardList boards={boards} />
      <FormWrap Form={BoardForm} text="New Project" />
    </div>
  );
}

function useFetchAllBoards() {
  const dispatch = useDispatch();
  const { boards, loading, error } = useSelector((state) => state.boards);

  useEffect(() => {
    dispatch(fetchAllBoards());
  }, []);

  return [boards, { loading, error }];
}
