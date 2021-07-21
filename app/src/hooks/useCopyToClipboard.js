import { useCallback } from "react";

export function useCopyToClipboard(ref) {
  const copyToClipboard = useCallback((content) => {
    try {
      navigator.clipboard
        .writeText(content)
        .then(() => console.log("Successfully copied"))
        .catch(() =>
          alert(`Error occured: please do this manually - "${content}"`)
        );
    } catch (err) {}
  }, []);

  const copyHandler = useCallback(
    (content) => {
      copyToClipboard(content);
      ref.current.select();
    },
    [ref]
  );

  return [copyHandler, copyToClipboard];
}
