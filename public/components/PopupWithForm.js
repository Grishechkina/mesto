import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({handleSubmitForm}, popupSelector) {
    super(popupSelector)
    this._handleSubmitForm = handleSubmitForm;
    this.form = this.popup.querySelector('.form');
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
    this._handleSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners()
    this.form.addEventListener('submit', this._submitForm);
  }

  closePopUp() {
    this.form.removeEventListener('submit', this._submitForm);
    super.closePopUp()
    this.form.reset();
  }
}