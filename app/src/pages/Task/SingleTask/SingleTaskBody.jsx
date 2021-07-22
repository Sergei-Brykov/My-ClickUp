import styles from "./styles.module.css";
import { MainLabel } from "../../../components/Inputs/MainLabel";
import { MainInput } from "../../../components/Inputs/MainInput";
import { ErrorView } from "../../../components/ErrorView";
import cl from "../../../helpers/classname";
import { MainSelect } from "../../../components/Inputs/MainSelect";
import { MainTextarea } from "../../../components/Inputs/MainTextarea";

function buildSelectData(columns) {
  return columns.map((column, index) => ({
    value: index,
    title: column.title,
  }));
}

export function SingleTaskBody({ form, board }) {
  return (
    <>
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
        id={"task-description"}
        value={form.values.description}
        onChange={form.onChange("description")}
      />
    </>
  );
}
