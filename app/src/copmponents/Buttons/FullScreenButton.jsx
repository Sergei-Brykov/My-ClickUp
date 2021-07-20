import { IconButton } from "./IconButton";
import Icon from "@iconify/react";
import arrowAll from "@iconify-icons/mdi/arrow-all";

export function FullScreenButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton leftExtreme={leftExtreme} onClick={onClick}>
      <Icon icon={arrowAll} />
    </IconButton>
  );
}
