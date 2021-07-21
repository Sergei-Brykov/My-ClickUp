import styles from "./styles.module.css";
import cl from "../../../helpers/classname";
import { Button } from "../../../components/Buttons";
import { MainInput } from "../../../components/Inputs/MainInput";
import { ErrorView } from "../../../components/ErrorView";
import { colors } from "../../../config/colors";
import { useAddColumnForm } from "./useAddColumnForm";
import { CheckedButton } from "../../../components/Buttons/ChecketButton";
import { invertColor } from "../../../helpers/invertColor";

export function ColumnForm({ onClose, column = null }) {
  const [form, error] = useAddColumnForm(onClose, column);

  return (
    <form onSubmit={form.onSubmit} className={styles.columnWrap}>
      <div
        className={cl(styles.column, styles.form)}
        style={{ borderColor: form.values.color }}
      >
        <div className={styles.inputWrap}>
          <MainInput
            autoFocus
            onChange={form.onChange("title")}
            value={form.values.title}
            placeholder={"COLUMN NAME"}
          />
          <div className={styles.colorWrap}>
            {colors.map((color) => (
              <div
                key={color}
                className={styles.circle}
                style={{ background: color }}
                onClick={() => form.customChange("color", color)}
              >
                {color === form.values.color && (
                  <CheckedButton fontSize={50} color={invertColor(color)} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.btnWrap}>
          <Button type="submit" disabled={form.disabledForm}>
            save
          </Button>
          <Button secondary type="button" onClick={onClose} className="ml">
            close
          </Button>
        </div>
      </div>
      {error && <ErrorView error={error} />}
    </form>
  );
}
