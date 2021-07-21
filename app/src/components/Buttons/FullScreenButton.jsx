import { IconButton } from "./IconButton";
import arrowExpandAll from "@iconify-icons/mdi/arrow-expand-all";

export function FullScreenButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton
      icon={arrowExpandAll}
      leftExtreme={leftExtreme}
      onClick={onClick}
    />
  );
}
