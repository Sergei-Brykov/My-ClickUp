import styles from "./styles.module.css";
import { Button } from "../../../components/Buttons";

export function SingleTaskFooter({ form, onDelete }) {
  return (
    <div className={styles.btnwrap}>
      <Button onClick={onDelete} secondary type="button">
        delete
      </Button>
      <Button disabled={form.disabledForm} type="submit">
        save
      </Button>
    </div>
  );
}
