import { IconButton } from "./IconButton";
import deleteIcon from "@iconify-icons/mdi-light/delete";

export function DeleterButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton icon={deleteIcon} leftExtreme={leftExtreme} onClick={onClick} />
  );
}
