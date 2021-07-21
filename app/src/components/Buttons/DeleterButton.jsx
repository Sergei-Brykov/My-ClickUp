import { IconButton } from "./IconButton";
import Icon from "@iconify/react";
import deleteIcon from "@iconify-icons/mdi-light/delete";

export function DeleterButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton leftExtreme={leftExtreme} onClick={onClick}>
      <Icon icon={deleteIcon} />
    </IconButton>
  );
}
