export default class Popup {

  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this.closingBtn = this.popup.querySelector('.pop-up__close-btn');
    this._closeByEsc = this._closeByEsc.bind(this);
    this._closeByOverlay = this._closeByOverlay.bind(this);
    this.closePopUp = this.closePopUp.bind(this);

  }

  setEventListeners() {
    document.addEventListener('keydown', this._closeByEsc);
    this.popup.addEventListener('click', this._closeByOverlay);
    this.closingBtn.addEventListener('click', this.closePopUp);
  }

  openPopUp() {
    this.popup.classList.add('pop-up_opened');
    this.setEventListeners();
  }

  closePopUp() {
    this.popup.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', this._closeByEsc);
    this.popup.removeEventListener('click', this._closeByOverlay);
    this.closingBtn.removeEventListener('click', this.closePopUp);
  }

  _closeByEsc(evt) {
    if (evt.key === 'Escape') {
      this.closePopUp();
    }
  }

  _closeByOverlay(evt) {
    if (evt.target.classList.contains('pop-up_opened')) {
      this.closePopUp();
    }
  }
}