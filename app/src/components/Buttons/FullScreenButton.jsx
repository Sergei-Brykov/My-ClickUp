import { IconButton } from "./IconButton";
import Icon from "@iconify/react";
import arrowExpandAll from "@iconify-icons/mdi/arrow-expand-all";

export function FullScreenButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton leftExtreme={leftExtreme} onClick={onClick}>
      <Icon icon={arrowExpandAll} />
    </IconButton>
  );
}
