import { useCallback, useState } from "react";

export function useCopyToClipboard(ref) {
  const [alert, setAlert] = useState(null);

  const copyToClipboard = useCallback((content) => {
    try {
      return navigator.clipboard
        .writeText(content)
        .then(() => true)
        .catch(console.log);
    } catch (err) {}
  }, []);

  const copyHandler = useCallback(
    async (content) => {
      const success = await copyToClipboard(content);
      if (!success) {
        setAlert(
          <span className="alert-error">
            Sorry copy manually your browser does not support copying
          </span>
        );
        setTimeout(() => setAlert(null), 3000);
        return;
      }
      if (document.selection) {
        // IE
        const range = document.body.createTextRange();
        range.moveToElementText(ref.current);
        range.select();
      } else if (window.getSelection) {
        const r = document.createRange();
        r.selectNode(ref.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
      }
      setAlert(<span className="alert">Successfully copied</span>);
      setTimeout(() => setAlert(null), 3000);
    },
    [ref]
  );

  return [copyHandler, copyToClipboard, alert];
}
