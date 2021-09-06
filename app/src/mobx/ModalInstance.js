import { serverApi } from '../server-api/index';
import { action, makeAutoObservable, observable } from 'mobx';

export class ModalInstance {
  isModal = null;
  type = null;
  data = null;

  constructor() {
    makeAutoObservable(this);
  }

  async openModal({ data, type }) {
    this.isModal = true;
    this.type = type;
    this.data = data;
  }

  async closeModal() {
    this.isModal = null;
  }
}
