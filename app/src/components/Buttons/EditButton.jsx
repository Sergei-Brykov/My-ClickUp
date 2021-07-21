import { IconButton } from "./IconButton";
import Icon from "@iconify/react";
import pencilIcon from "@iconify-icons/mdi-light/pencil";

export function EditButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton leftExtreme={leftExtreme} onClick={onClick}>
      <Icon icon={pencilIcon} />
    </IconButton>
  );
}
