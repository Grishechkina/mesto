import './pages/index.css'
import Card from './components/Card.js'
import FormValidator from './components/FormValidator.js'
import Section from './components/Section.js'
import PopupWithImage from './components/PopupWithImage.js'
import {
  initialCards,
  editingBtn,
  editingForm,
  editingFormName,
  editingFormActivity,
  addingCardBtn,
  addingCardForm,
  forms
} from './utils/constants.js'
import PopupWithForm from './components/PopupWithForm.js'
import UserInfo from './components/UserInfo.js'

const popupWithImage = new PopupWithImage('.img-pop-up');
const user = new UserInfo({nameSelector: '.profile__name', activitySelector: '.profile__activity'});

const popupAddingCard = new PopupWithForm({
  handleSubmitForm: (item) => {
    const cardEl = createCard(item);
    defaultCardList.addItem(cardEl);
    popupAddingCard.closePopUp()
  }
}, '.add-card-pop-up')

const popupEditProfile = new PopupWithForm({
  handleSubmitForm: (item) => {
    user.setUserInfo(item)
    popupEditProfile.closePopUp()
  }
}, '.edit-pop-up')

const handleCardClick = (card) => {
  popupWithImage.openPopUp(card)
}

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardEl = createCard(item);
    defaultCardList.addItem(cardEl);
  }
}, '.cards__list');

function createCard(item) {
  const cardItem = new Card({ card: item, handleCardClick: handleCardClick }, '#card-template')
  const cardElement = cardItem.createCard();
  return cardElement
}

function openEditingProfilePopUp() {
  const editForm = forms.find(item => item.form.classList.contains('pop-up__edit-form'))
  editForm.clearForm()
  const userInfo = user.getUserInfo()
  editingFormName.value = userInfo.profileName;
  editingFormActivity.value =  userInfo.profileActivity;
  popupEditProfile.openPopUp()
}

function openAddingCardPopUp() {
  const addingCardForm = forms.find(item => item.form.classList.contains('pop-up__add-card-form'))
  addingCardForm.clearForm()
  popupAddingCard.openPopUp()
}

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

editingBtn.addEventListener('click', openEditingProfilePopUp);

addingCardBtn.addEventListener('click', openAddingCardPopUp);

setValidation();
defaultCardList.renderAll()