import { MainInput } from "../../../components/Inputs/MainInput";
import { MainLabel } from "../../../components/Inputs/MainLabel";
import { MainTextarea } from "../../../components/Inputs/MainTextarea";
import styles from "./styles.module.css";
import { useTaskForm } from "../../../hooks/useTaskForm";
import { Button } from "../../../components/Buttons";
import { MainSelect } from "../../../components/Inputs/MainSelect";
import cl from "../../../helpers/classname";
import { TaskHeader } from "./TaskHeader";
import { ErrorView } from "../../../components/ErrorView";
import { useTaskHandle } from "../../../hooks/useTaskHandle";

function buildSelectData(columns) {
  return columns.map((column, index) => ({
    value: index,
    title: column.title,
  }));
}

export function SingleTask({
  task,
  board,
  column,
  onClose = () => alert("task save"),
}) {
  const [deleteTaskHandler] = useTaskHandle(task.id, column, onClose);

  const [form] = useTaskForm(onClose, {
    task,
    columnId: column.id,
    columnIndex: board.columns.findIndex((tmp) => tmp.id === column.id),
  });

  if (!task) return null;

  return (
    <form className={styles.container} onSubmit={form.onSubmit}>
      <TaskHeader task={task} board={board} column={column} />

      <div className={styles.columnswrap}>
        <div className={styles.column}>
          <MainLabel
            title={"TaskInBoard title: "}
            size={24}
            htmlFor={"task-title"}
          />
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
        htmlFor={"task-s-description"}
        title={"Short description:"}
      />
      <MainTextarea
        id="task-s-description"
        value={form.values.shortDescription}
        onChange={form.onChange("shortDescription")}
      />
      {form.errors.shortDescription && (
        <ErrorView
          key={form.errors.shortDescription}
          error={form.errors.shortDescription}
        />
      )}
      <MainLabel
        size={24}
        htmlFor={"task-description"}
        title={"Main description: "}
      />
      <MainTextarea
        rows={8}
        value={form.values.description}
        onChange={form.onChange("description")}
      />
      <div className={styles.btnwrap}>
        <Button onClick={deleteTaskHandler} secondary type="button">
          delete
        </Button>
        <Button disabled={form.disabledForm} type="submit">
          save
        </Button>
      </div>
    </form>
  );
}
