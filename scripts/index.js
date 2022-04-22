import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { openPopUp, closePopUp } from './popUp.js'
const initialCards = [
  {
    name: 'Геленджик',
    link: './images/gelendzhik.jpg'
  },
  {
    name: 'Кабардинка',
    link: './images/kabardinka.jpg'
  },
  {
    name: 'Мурманск',
    link: './images/murmansk.jpg'
  },
  {
    name: 'Мытищи',
    link: './images/mytishchi.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: './images/nizhniy-novgorod.jpg'
  },
  {
    name: 'Севастополь',
    link: './images/sevastopol.jpg'
  },
];

const closingBtns = document.querySelectorAll('.pop-up__close-btn');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');

const editingBtn = profile.querySelector('.profile__edit-btn');
const editingPopUp = document.querySelector('.edit-pop-up');
const editingForm = document.querySelector('.pop-up__edit-form');
const editingFormName = editingForm.name;
const editingFormActivity = editingForm.activity;

const addingCardBtn = profile.querySelector('.profile__add-btn');
const addingCardPopUp = document.querySelector('.add-card-pop-up');
const addingCardForm = document.querySelector('.pop-up__add-card-form');

const cardsList = document.querySelector('.cards__list');
const forms = [];

function openEditingProfilePopUp() {
  const editForm = forms.find(item => item.form.classList.contains('pop-up__edit-form'))
  editForm.clearForm()
  editingFormName.value = profileName.textContent;
  editingFormActivity.value = profileActivity.textContent;

  openPopUp(editingPopUp);
}

function openAddingCardPopUp() {
  const addingCardForm = forms.find(item => item.form.classList.contains('pop-up__add-card-form'))
  addingCardForm.clearForm()

  openPopUp(addingCardPopUp);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editingFormName.value;
  profileActivity.textContent = editingFormActivity.value;
  closePopUp(editingPopUp);
}

function handleAddingCardFormSubmit(evt) {
  evt.preventDefault();
  const card = { name: addingCardForm.place.value, link: addingCardForm.link.value };
  addCard(card);
  closePopUp(addingCardPopUp);
  addingCardForm.reset();
}

function initCard(card) {
  const cardItem = new Card(card, '#card-template')
  const cardElement = cardItem.createCard();
  return cardElement
}

function addCard(card) {
  const cardElement = initCard(card);
  cardsList.prepend(cardElement);
}

function renderCards() {
  initialCards.forEach((item) => {
    addCard(item)
  });
};

function setValidation() {
  const configuration = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save-btn',
    disabledButtonClass: 'form__save-btn_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error'
  }

  const editFormValidator = new FormValidator(configuration, editingForm);
  const cardFormValidator = new FormValidator(configuration, addingCardForm)

  forms.push(editFormValidator, cardFormValidator)

  editFormValidator.enabledValidation();
  cardFormValidator.enabledValidation();
}

closingBtns.forEach(btn => btn.addEventListener('click', (evt) => closePopUp(evt.target.closest('.pop-up'))));

editingBtn.addEventListener('click', openEditingProfilePopUp);
editingForm.addEventListener('submit', handleProfileFormSubmit);

addingCardBtn.addEventListener('click', openAddingCardPopUp);
addingCardForm.addEventListener('submit', handleAddingCardFormSubmit);

renderCards();
setValidation();