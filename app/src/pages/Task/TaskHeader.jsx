import styles from "./styles.module.css";
import { BreadCrums } from "../../copmponents/BreadCrums";
import cl from "../../helpers/classname";
import { MainLabel } from "../../copmponents/Inputs/MainLabel";
import { MainInput } from "../../copmponents/Inputs/MainInput";
import { path } from "../../Providers/path";
import { useCallback, useRef } from "react";

import { normalizeTime } from "../../helpers/normalizeTime";
import { CopyButton } from "../../copmponents/Buttons/CopyButton";

function buildBreadCrumsData(board, column) {
  return [
    { label: "Board: ", title: board.title },
    { label: "Column: ", title: column.title },
  ];
}

function buildCreatedAtData(task) {
  return [
    { label: "Created at: ", title: normalizeTime(task.createdAt) },
    { label: "Updated at: ", title: normalizeTime(task.updateddAt) },
  ];
}

export function TaskHeader({ task, column, board }) {
  const link = window.origin + path.task(board.id, column.id, task.id);
  const ref = useRef(null);

  const copyHandler = useCopyToClipboard(ref);

  return (
    <>
      <h2 className={styles.title}>
        <span className={styles.subtitle}>Task:</span>
        {task.title}
      </h2>
      <div className={styles.columnswrap}>
        <div className={styles.column}>
          <BreadCrums items={buildBreadCrumsData(board, column)} />
        </div>
        <div className={cl(styles.column, styles.nonemargin)}>
          <BreadCrums items={buildCreatedAtData(task)} />
        </div>
      </div>
      <div className={cl(styles.link, "mt-2", "mb-2")}>
        <div className={styles.copyInput}>
          <MainLabel title={"Task link: "} size={24} htmlFor={"task-title"} />
          <MainInput inputRef={ref} readOnly value={link} />
        </div>
        <div className={styles.column}>
          <CopyButton onClick={() => copyHandler(link)} />
        </div>
      </div>
    </>
  );
}

function useCopyToClipboard(ref) {
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

  return useCallback(
    (content) => {
      copyToClipboard(content);
      ref.current.select();
    },
    [ref]
  );
}

export default useCopyToClipboard;
