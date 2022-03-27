function showInputError(form, input, errorMessage, {inputErrorClass, errorClass}) {
  input.classList.add(inputErrorClass);

  const errorElement = form.querySelector(`.${input.id}-input-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(form, input, {inputErrorClass, errorClass}) {
  input.classList.remove(inputErrorClass);

  const errorElement = form.querySelector(`.${input.id}-input-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
}

function isValid(form, input, rest) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, rest);
  } else {
    hideInputError(form, input, rest);
  }
}

function setEventListeners(form, {inputSelector, submitButtonSelector, ...rest}) {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector)
  toggleButtonState(inputList, button, rest.disabledButtonClass)

  inputList.forEach(input => input.addEventListener('input', () => {
    isValid(form, input, rest)
    toggleButtonState(inputList, button, rest.disabledButtonClass)
  }))

}

function hasInvalidInput(inputList) {
  return inputList.some(input => !input.validity.valid)
}

function toggleButtonState(inputList, button, disabledButtonClass) {
  if (hasInvalidInput(inputList)) {
    button.classList.add(disabledButtonClass)
    button.setAttribute('disabled', '');
  } else {
    button.classList.remove(disabledButtonClass)
    button.removeAttribute('disabled');
  }
}

function enabledValidation({formSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(form => {
    form.addEventListener('submit', evt => {
      evt.preventDefault();
    })
    setEventListeners(form, rest)
  })
}