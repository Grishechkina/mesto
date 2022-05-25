import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({handleSubmitForm, getInitialData}, popupSelector) {
    super(popupSelector)
    this._handleSubmitForm = handleSubmitForm;
    this.getInitialData = getInitialData
    this.form = this.popup.querySelector('.form');
    this.saveBtn = this.form.querySelector('.form__save-btn')
    this._submitForm = this._submitForm.bind(this)
    this._inputList = this.form.querySelectorAll('.form__input');
    this._formValues = {};
  }

  _getInputValues() {
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._handleSubmitForm(this._getInputValues(), this);
  }

  setEventListeners() {
    super.setEventListeners()
    this.form.addEventListener('submit', this._submitForm);
  }

  renderLoading(buttonText='Сохранить') {
    this.saveBtn.textContent = buttonText
  }
  openPopUp(){
    if(this.getInitialData) {
      this.setInputValues(this.getInitialData())
    }
    super.openPopUp()
  }
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  closePopUp() {
    this.form.removeEventListener('submit', this._submitForm);
    super.closePopUp()
    this.form.reset();
  }
}