import { useCallback } from 'react';
import { useInstance } from 'react-ioc';
import { ModalInstance } from '../mobx/ModalInstance';

export function useModal() {
  const modalInstance = useInstance(ModalInstance);
  const { isModal, data, type } = modalInstance;

  const closeModalHandler = useCallback(() => modalInstance.closeModal(), []);

  return { isModal, modalData: data, type, closeModalHandler };
}
