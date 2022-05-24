import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {

  constructor({ handleSaveBtnClick }, popupSelector) {
    super(popupSelector)
    this._handleSaveBtnClick = handleSaveBtnClick;
    this._saveBtn = this.popup.querySelector('.form__save-btn')
  }

  openPopUp(elem, data) {
    super.openPopUp()
    this._elem = elem
    this._data = data
}

  setEventListeners() {
    super.setEventListeners()
    this._saveBtn.addEventListener('click', () => {
      this._handleSaveBtnClick(this._elem, this._data)
    } )
  }
}

/**import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {

  constructor({ handleSaveBtnClick }, popupSelector) {
    super(popupSelector)
    this._handleSaveBtnClick = handleSaveBtnClick;
    this._saveBtn = this.popup.querySelector('.form__save-btn')
    
  }

  openPopUp(elem, data) {
    console.log(data._id)
    this._handleSaveBtnClick = this._handleSaveBtnClick.bind(this, elem, data)
    super.openPopUp()
}

  closePopUp() {
    super.closePopUp()
    this._saveBtn.removeEventListener('click', this._handleSaveBtnClick)
  }

  setEventListeners() {
    console.log(this._handleSaveBtnClick)
    super.setEventListeners()
    this._saveBtn.addEventListener('click', this._handleSaveBtnClick)
  }
} */