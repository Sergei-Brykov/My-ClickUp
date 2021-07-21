import { IconButton } from "./IconButton";
import pencilIcon from "@iconify-icons/mdi-light/pencil";

export function EditButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton icon={pencilIcon} leftExtreme={leftExtreme} onClick={onClick} />
  );
}
