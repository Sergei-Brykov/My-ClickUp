import styles from "./styles.module.css";
import { MainInput } from "../../../components/Inputs/MainInput";
import { MainTextarea } from "../../../components/Inputs/MainTextarea";
import { MainLabel } from "../../../components/Inputs/MainLabel";
import { Button } from "../../../components/Buttons";
import { useTaskForm } from "../../../hooks/useTaskForm";
import { ErrorView } from "../../../components/ErrorView";

export function TaskForm({ onClose, context }) {
  const [form, errors] = useTaskForm(onClose, context);

  return (
    <>
      <form onSubmit={form.onSubmit} className={styles.container}>
        <MainLabel>Task title: </MainLabel>
        <MainInput
          autoFocus
          onChange={form.onChange("title")}
          value={form.values.title}
          placeholder={"Task title"}
          style={{ paddingLeft: 4 }}
        />

        <MainLabel mt>Task description: </MainLabel>
        <MainTextarea
          value={form.values.shortDescription}
          onChange={form.onChange("shortDescription")}
          placeholder="Short description"
          style={{ paddingLeft: 4 }}
        />

        <div className={styles.btnWrap}>
          <Button secondary type="button" onClick={onClose}>
            close
          </Button>
          <Button type="submit" disabled={form.disabledForm}>
            save
          </Button>
        </div>
      </form>
      {errors.map((error, index) => (
        <ErrorView key={index} error={error} />
      ))}
    </>
  );
}
