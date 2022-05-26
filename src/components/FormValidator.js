export default class FormValidator {
  constructor(validatorSelectors, form) {
    this.formSelector = validatorSelectors.formSelector
    this.inputSelector = validatorSelectors.inputSelector
    this.submitButtonSelector = validatorSelectors.submitButtonSelector
    this.disabledButtonClass = validatorSelectors.disabledButtonClass
    this.inputErrorClass = validatorSelectors.inputErrorClass
    this.errorClass = validatorSelectors.errorClass
    this.form = form;
  }

  _showInputError(input, errorMessage) {
    input.classList.add(this.inputErrorClass);
  
    const errorElement = this.form.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }
  
  _hideInputError(input) {
    input.classList.remove(this.inputErrorClass);
  
    const errorElement = this.form.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this.errorClass);
  }
  
  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }
  
  _setEventListener() {
    this.inputList = Array.from(this.form.querySelectorAll(this.inputSelector));
    this.saveButton = this.form.querySelector(this.submitButtonSelector)
    this._toggleButtonState()
  
    this.inputList.forEach(input => input.addEventListener('input', () => {
      this._isValid(input)
      this._toggleButtonState()
    }))
  
  }
  
  _hasInvalidInput() {
    return this.inputList.some(input => !input.validity.valid)
  }
  
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.saveButton.classList.add(this.disabledButtonClass)
      this.saveButton.setAttribute('disabled', '');
    } else {
      this.saveButton.classList.remove(this.disabledButtonClass)
      this.saveButton.removeAttribute('disabled');
    }
  }
  
  enabledValidation() {
    this.form.addEventListener('submit', evt => {
        evt.preventDefault();
      })
      this._setEventListener()
  }

  clearForm() {
    this.inputList.forEach(input => {
      input.value = ''
      this._hideInputError(input)
    });
    this._toggleButtonState();
  }
}