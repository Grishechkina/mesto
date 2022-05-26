import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithConfirm from '../components/PopupWithConfirm.js'
import {
  editingBtn,
  editingForm,
  addingCardBtn,
  addingCardForm,
  confirmPopUpBtn,
  editAvatarBtn,
  editAvatarForm,
  forms
} from '../utils/constants.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: '13ad9a03-10d1-4fa8-bf7f-d95899c835fe',
    'Content-Type': 'application/json'
  }
})

const formValidators = {}
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-btn',
  disabledButtonClass: 'form__save-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error'
}

const popupWithImage = new PopupWithImage('.img-pop-up');
const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity' , avatarSelector: '.profile__avatar'});

const popupConfirm = new PopupWithConfirm({
  handleSaveBtnClick: (cardEl, card) => {
    confirmPopUpBtn.textContent = 'Удаление...'
    api.deleteCard(card._id)
      .then(res => {
        cardEl.remove()
        popupConfirm.closePopUp()
      })
      .catch(err => console.log(err))
      .finally(() => confirmPopUpBtn.textContent = 'Да')
  }
}, '.confirm-pop-up');

const popupEditAvaForm = new PopupWithForm({
  handleSubmitForm: (item, formRef) => {
    formRef.renderLoading('Сохранение...')
    api.changeAvatar({avatar: item.link})
      .then(res => {
        user.setUserInfo(res)
        popupEditAvaForm.closePopUp()
      })
      .catch(err => console.log(err))
      .finally(() => formRef.renderLoading())
  }
}, '.edit-avatar-pop-up')

const popupAddingCard = new PopupWithForm({
  handleSubmitForm: (item, formRef) => {
    formRef.renderLoading('Сохранение...')
    api.addNewCard({ name: item.name, link: item.link })
      .then(res => {
        const cardEl = createCard(res);
        defaultCardList.addItem(cardEl);
        popupAddingCard.closePopUp()
      })
      .catch(err => console.log(err))
      .finally(() => formRef.renderLoading())
  }
}, '.add-card-pop-up')

const popupEditProfile = new PopupWithForm({
  handleSubmitForm: (item, formRef) => {
    formRef.renderLoading('Сохранение...')
    api.editUserInfo({ name: item.name, about: item.activity })
      .then(res => {
        user.setUserInfo(res)
        popupEditProfile.closePopUp()

      })
      .catch(err => console.log(err))
      .finally(() => formRef.renderLoading())
  },
  getInitialData: () => user.getUserInfo()
}, '.edit-pop-up')

const handleCardClick = (card) => {
  popupWithImage.openPopUp(card)
}

const handleDeleteBtn = (cardEl, card) => {
  popupConfirm.openPopUp(cardEl, card)
}

const handleCardLike = (cardRef, isLiked) => {

  api.handleLike(cardRef.card._id, isLiked)
  .then(res => {
    cardRef.card.likes = res.likes
    cardRef.calculateLikes()
    cardRef.likeBtn.classList.toggle('card__like-btn_active')
  })
  .catch(err => console.log(err))
}

let defaultCardList;

function createCard(item) {
  const cardItem = new Card({ card: item, handleCardClick, handleDeleteBtn , handleCardLike, userId: user.userInfo._id}, '#card-template')
  const cardElement = cardItem.createCard();

  return cardElement
}

function openeditAvatarPopUp() {
  formValidators['avatar-edit-form'].clearForm()
  popupEditAvaForm.openPopUp()
}

function openEditingProfilePopUp() {
  formValidators['profile-edit-form'].clearForm()
  popupEditProfile.openPopUp()
}

function openAddingCardPopUp() {
  formValidators['add-card-form'].clearForm()
  popupAddingCard.openPopUp()
}

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enabledValidation();
  });
};

enableValidation(validationConfig);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    user.setUserInfo(userData)

    defaultCardList = new Section({
      items: cards.reverse(),
      renderer: (item) => {
        const cardEl = createCard(item);
        defaultCardList.addItem(cardEl);
      }
    }, '.cards__list');

    defaultCardList.renderAll()
  })
  .catch(err => console.log(err));

editingBtn.addEventListener('click', openEditingProfilePopUp);
addingCardBtn.addEventListener('click', openAddingCardPopUp);
editAvatarBtn.addEventListener('click', openeditAvatarPopUp);
