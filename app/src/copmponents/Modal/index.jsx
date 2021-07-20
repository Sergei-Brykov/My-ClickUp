import styles from "./styles.module.css";
import cl from "../../helpers/classname";
import { useModal } from "../../hooks/useModal";
import { ModalWrapper } from "./ModalWrapper";

export function Modal(props) {
  const [isModal, closeModalHandler] = useModal();

  return (
    <div
      className={cl(styles.container, isModal && styles.active)}
      onClick={closeModalHandler}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {isModal && (
          <ModalWrapper
            context={isModal}
            {...props}
            onClose={closeModalHandler}
          />
        )}
      </div>
    </div>
  );
}
