import { MainInput } from "../../components/Inputs/MainInput";
import { MainLabel } from "../../components/Inputs/MainLabel";
import { MainTextarea } from "../../components/Inputs/MainTextarea";
import styles from "./styles.module.css";
import { useTaskForm } from "./TaskForm/useTaskForm";
import { Button } from "../../components/Buttons";
import { MainSelect } from "../../components/Inputs/MainSelect";
import cl from "../../helpers/classname";
import { TaskHeader } from "./TaskHeader";
import { ErrorView } from "../../components/ErrorView";

function buildSelectData(columns) {
  return columns.map((column, index) => ({
    value: index,
    title: column.title,
  }));
}

export function SingleTask({ task, board, column, onClose }) {
  const [form] = useTaskForm(onClose, {
    task,
    columnId: column.id,
    columnIndex: board.columns.findIndex((tmp) => tmp.id === column.id),
  });

  if (!task) return null;
  console.log(form);

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
            onChange={(e) => form.customChange("location", e.target.value)}
            items={buildSelectData(board.columns)}
            value={form.values.location}
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
        <Button secondary type="button">
          delete
        </Button>
        <Button disabled={form.disabledForm} type="submit">
          save
        </Button>
      </div>
    </form>
  );
}
