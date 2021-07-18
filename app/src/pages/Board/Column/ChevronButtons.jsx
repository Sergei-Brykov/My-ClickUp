import { IconButton } from "../../../copmponents/Buttons/IconButton";
import Icon from "@iconify/react";
import chevronLeft from "@iconify-icons/mdi-light/chevron-left";
import chevronRight from "@iconify-icons/mdi-light/chevron-right";

const chevrons = {
  left: chevronLeft,
  right: chevronRight,
};

export function ChevronButton({ onClick, leftExtreme = false, direction }) {
  return (
    <IconButton isLeft={leftExtreme} onClick={onClick}>
      <Icon icon={chevrons[direction]} />
    </IconButton>
  );
}
