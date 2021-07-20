import styles from "../styles.module.css";
import { Button } from "../../../copmponents/Buttons";
import cl from "../../../helpers/classname";
import { ErrorView } from "../../../copmponents/ErrorView";
import { useBoardForm } from "./useBoardForm";
import { MainInput } from "../../../copmponents/Inputs/MainInput";

export function BoardForm({ onClose, board }) {
  const [form, error] = useBoardForm(onClose, board);

  return (
    <>
      <form
        className={cl(styles.addBoardForm, !!error && styles.error)}
        onSubmit={form.onSubmit}
        /*TODO refactor blur logic*/
        onBlur={() => setTimeout(onClose, 200)}
      >
        <MainInput
          autoFocus
          className={styles.input}
          placeholder="Project name"
          onChange={form.onChange("title")}
          value={form.values.title}
        />

        <Button type={"submit"} className="mr-2" disabled={form.disabledForm}>
          save
        </Button>
        <Button secondary className="mr-2" onClick={onClose}>
          close
        </Button>
      </form>
      {error && <ErrorView error={error} />}
    </>
  );
}
