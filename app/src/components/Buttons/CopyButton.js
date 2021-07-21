import { IconButton } from "./IconButton";
import contentCopy from "@iconify-icons/mdi/content-copy";

export function CopyButton({ onClick, leftExtreme = false }) {
  return (
    <IconButton
      icon={contentCopy}
      leftExtreme={leftExtreme}
      onClick={onClick}
    />
  );
}
