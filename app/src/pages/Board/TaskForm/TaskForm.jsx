import styles from "./styles.module.css";
import { MainInput } from "../../../copmponents/Inputs/MainInput";
import { MainTextarea } from "../../../copmponents/Inputs/MainTextarea";
import { MainLabel } from "../../../copmponents/Inputs/MainLabel";
import { Button } from "../../../copmponents/Buttons";
import { useTaskForm } from "./useTaskForm";

export function TaskForm({ onClose, context }) {
  const [form, error] = useTaskForm(onClose, context);

  return (
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
        <Button type="submit" disabled={form.disabledForm}>
          save
        </Button>
        <Button>close</Button>
      </div>
    </form>
  );
}
