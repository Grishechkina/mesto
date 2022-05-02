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

const handleCardClick = (card) => {
  const popupWithImage = new PopupWithImage('.img-pop-up')
  popupWithImage.openPopUp(card)
}

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardItem = new Card({ card: item, handleCardClick: handleCardClick }, '#card-template')
    const cardElement = cardItem.createCard();
    defaultCardList.addItem(cardElement);
  }
}, '.cards__list');

function openEditingProfilePopUp() {
  const editForm = forms.find(item => item.form.classList.contains('pop-up__edit-form'))
  editForm.clearForm()
  const user = new UserInfo({nameSelector: '.profile__name', activitySelector: '.profile__activity'});
  const userInfo = user.getUserInfo()
  console.log(userInfo)
  editingFormName.value = userInfo.profileName;
  editingFormActivity.value =  userInfo.profileActivity;
  const popupEditProfile = new PopupWithForm({
    handleSubmitForm: (item) => {
      console.log(item)
      user.setUserInfo(item)
      console.log(editingForm)
      popupEditProfile.closePopUp()
    }
  }, '.edit-pop-up')
  popupEditProfile.openPopUp()
}

function openAddingCardPopUp() {
  const addingCardForm = forms.find(item => item.form.classList.contains('pop-up__add-card-form'))
  addingCardForm.clearForm()
  const popupAddingCard = new PopupWithForm({
    handleSubmitForm: (item) => {
      const cardItem = new Card({ card: item, handleCardClick: handleCardClick }, '#card-template')
      const cardElement = cardItem.createCard();
      defaultCardList.addItem(cardElement);
      popupAddingCard.closePopUp()
    }
  }, '.add-card-pop-up')
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