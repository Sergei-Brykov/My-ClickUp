import { MainInput } from "../../copmponents/Inputs/MainInput";
import { MainLabel } from "../../copmponents/Inputs/MainLabel";
import { MainTextarea } from "../../copmponents/Inputs/MainTextarea";
import styles from "./styles.module.css";
import { useTaskForm } from "../Board/TaskForm/useTaskForm";
import { Button } from "../../copmponents/Buttons";
import { MainSelect } from "../../copmponents/Inputs/MainSelect";
import cl from "../../helpers/classname";
import { TaskHeader } from "./TaskHeader";
import { ErrorView } from "../../copmponents/ErrorView";

function buildSelectData(columns) {
  return columns.map((column, index) => ({
    value: index,
    title: column.title,
  }));
}

export function SingleTask({ task, board, column, onClose }) {
  const [form] = useTaskForm(onClose, { task, columnId: column.id });

  if (!task) return null;

  return (
    <form className={styles.container} onSubmit={form.onSubmit}>
      <TaskHeader task={task} board={board} column={column} />

      <div className={styles.columnswrap}>
        <div className={styles.column}>
          <MainLabel title={"Task title: "} size={24} htmlFor={"task-title"} />
          <MainInput
            id={"task-title"}
            value={form.values.title}
            onChange={form.onChange("title")}
          />
          {form.errors.title && (
            <ErrorView key={form.errors.title} error={form.errors.title} />
          )}
        </div>
        <div className={cl(styles.column, styles.nonemargin)}>
          <MainLabel
            size={24}
            htmlFor={"task-location"}
            title={"Current column:"}
          />
          <MainSelect
            id={"task-location"}
            items={buildSelectData(board.columns)}
            value={board.columns.findIndex((tmp) => tmp.id === column.id)}
          />
        </div>
      </div>
      <MainLabel
        size={24}
        htmlFor={"task-title"}
        title={"Short description:"}
      />
      <MainTextarea
        value={form.values.shortDescription}
        onChange={form.onChange("shortDescription")}
      />
      <MainLabel
        size={24}
        htmlFor={"task-title"}
        title={"Main description: "}
      />
      <MainTextarea
        rows={8}
        value={task.description}
        onChange={form.onChange("description")}
      />
      <div className={styles.btnwrap}>
        <Button secondary type="submit">
          delete
        </Button>
        <Button disabled={form.disabledForm} type="button">
          save
        </Button>
      </div>
    </form>
  );
}
