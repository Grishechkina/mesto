import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {

  constructor({ handleSaveBtnClick }, popupSelector) {
    super(popupSelector)
    this._handleSaveBtnClick = handleSaveBtnClick;
    this._saveBtn = this.popup.querySelector('.form__save-btn')
    this._confirmDialog = this._confirmDialog.bind(this)
  }

  openPopUp(elem, data) {
    this._elem = elem
    this._data = data
    super.openPopUp()
}

  closePopUp() {
    super.closePopUp()
    this._saveBtn.removeEventListener('click', this._confirmDialog)
  }

  setEventListeners() {
    console.log(this._handleSaveBtnClick)
    super.setEventListeners()
    this._saveBtn.addEventListener('click', this._confirmDialog)
  }
  _confirmDialog() {
    this._handleSaveBtnClick(this._elem, this._data)
  }
}