import { IconButton } from "./IconButton";
import Icon from "@iconify/react";
import contentCopy from "@iconify-icons/mdi/content-copy";

export function CopyButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton leftExtreme={leftExtreme} onClick={onClick}>
      <Icon icon={contentCopy} />
    </IconButton>
  );
}
