import { BoardListHeader } from "./BoardListHeader";
import { BoardItem } from "./BoardItem";

export function BoardList({ boards }) {
  return (
    <>
      <BoardListHeader />
      {boards.map((board) => (
        <BoardItem key={board.id} {...board} />
      ))}
    </>
  );
}
