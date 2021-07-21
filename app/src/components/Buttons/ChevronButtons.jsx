import { IconButton } from "./IconButton";
import chevronLeft from "@iconify-icons/mdi-light/chevron-left";
import chevronRight from "@iconify-icons/mdi-light/chevron-right";

const chevrons = {
  left: chevronLeft,
  right: chevronRight,
};

export function ChevronButton({ onClick, leftExtreme = false, direction }) {
  return (
    <IconButton
      icon={chevrons[direction]}
      isLeft={leftExtreme}
      onClick={onClick}
    />
  );
}
