import styles from "./styles.module.css";
import { BreadCrums } from "../../components/BreadCrums";
import cl from "../../helpers/classname";
import { MainLabel } from "../../components/Inputs/MainLabel";
import { MainInput } from "../../components/Inputs/MainInput";
import { path } from "../../Providers/path";
import { useRef } from "react";

import { normalizeTime } from "../../helpers/normalizeTime";
import { CopyButton } from "../../components/Buttons/CopyButton";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

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
  const [copyHandler] = useCopyToClipboard(ref);

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
      <div className={cl("mt-2", "mb-2")}>
        <div className={styles.copyInput}>
          <MainLabel
            title={"TaskInBoard link: "}
            size={24}
            htmlFor={"task-title"}
          />
          <MainInput
            className={styles.linkInput}
            inputRef={ref}
            readOnly
            value={link}
          />
        </div>
        <div className={styles.column}>
          <CopyButton onClick={() => copyHandler(link)} />
        </div>
      </div>
    </>
  );
}
