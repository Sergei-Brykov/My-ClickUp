import { useRef } from "react";
import cl from "../../../helpers/classname";
import styles from "./styles.module.css";
import { path } from "../../../Providers/path";
import { ViewLink } from "./ViewLink";
import { BreadCrums } from "../../../components/BreadCrums";
import { MainLabel } from "../../../components/Inputs/MainLabel";
import { normalizeTime } from "../../../helpers/normalizeTime";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";

function buildBreadCrumsData(board, column) {
  return [
    { label: "Board: ", title: board.title },
    { label: "Column: ", title: column.title },
  ];
}

function buildCreatedAtData(task) {
  return [
    { label: "Created at: ", title: normalizeTime(task.createdAt) },
    { label: "Updated at: ", title: normalizeTime(task.updatedAt) },
  ];
}

export function TaskHeader({ task, column, board }) {
  const taskPath = path.task(board.id, task.id);
  const link = window.origin + taskPath;

  const ref = useRef(null);
  const [copyHandler, _, copyAlert] = useCopyToClipboard(ref);

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
        <MainLabel
          title={"TaskInBoard link: "}
          size={24}
          htmlFor={"task-link"}
        />
        <ViewLink
          path={taskPath}
          id={"task-link"}
          divRef={ref}
          link={link}
          copyHandler={copyHandler}
        />
        {copyAlert}
      </div>
    </>
  );
}
