import styles from "./styles.module.css";
import cl from "../../helpers/classname";
import { useModal } from "../../hooks/useModal";
import { ModalWrapper } from "./ModalWrapper";
import { CloseButton } from "../Buttons/CloseButton";

export function Modal(props) {
  const [isModal, closeModalHandler] = useModal();

  return (
    <div
      className={cl(styles.container, isModal && styles.active)}
      onClick={closeModalHandler}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtnWrap}>
          <CloseButton size={30} onClick={closeModalHandler} />
        </div>
        {isModal && (
          <ModalWrapper
            {...props}
            context={isModal}
            onClose={closeModalHandler}
          />
        )}
      </div>
    </div>
  );
}
