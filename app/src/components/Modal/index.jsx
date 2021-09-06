import styles from './styles.module.css';
import cl from '../../helpers/classname';
import { useModal } from '../../hooks/useModal';
import { ModalWrapper } from './ModalWrapper';
import { CloseButton } from '../Buttons/CloseButton';
import { observer } from 'mobx-react';

export const Modal = observer(_Modal);

function _Modal(props) {
  const { isModal, modalData, type, closeModalHandler } = useModal();

  return (
    <div className={cl(styles.container, isModal && styles.active)} onClick={closeModalHandler}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtnWrap}>
          <CloseButton size={30} onClick={closeModalHandler} />
        </div>
        {isModal && <ModalWrapper {...props} type={type} modalData={modalData} onClose={closeModalHandler} />}
      </div>
    </div>
  );
}
