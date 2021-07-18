import { useParams } from "react-router-dom";

export function BoardPage() {
  const board = useBoard();

  return <div>board page</div>;
}

function useBoard() {
  const { id } = useParams();
  console.log(id);

  return {};
}
