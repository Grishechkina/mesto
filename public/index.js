import './pages/index.css'
import Card from './components/Card.js'
import FormValidator from './components/FormValidator.js'
import Section from './components/Section.js'
import PopupWithImage from './components/PopupWithImage.js'
import PopupWithConfirm from './components/PopupWithConfirm.js'
import {
  editingBtn,
  editingForm,
  editingFormName,
  editingFormActivity,
  editingSaveBtn,
  addingCardBtn,
  addingCardForm,
  addingSaveBtn,
  confirmPopUpBtn,
  editAvatarBtn,
  editAvatarForm,
  editAvatarSaveBtn,
  forms
} from './utils/constants.js'
import PopupWithForm from './components/PopupWithForm.js'
import UserInfo from './components/UserInfo.js'
import Api from './components/Api'

const api = new Api({
  headers: {
    authorization: '13ad9a03-10d1-4fa8-bf7f-d95899c835fe',
    'Content-Type': 'application/json'
  }
})

const popupWithImage = new PopupWithImage('.img-pop-up');
const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity' , avatarSelector: '.profile__avatar'});
//ФОРМЫ НЕ НУЖНЫ
// const popupConfirm = new PopupWithConfirmForm({
//   handleSubmitForm: (item, card) => {
//     console.log(item)
//     console.log(card)

//     confirmPopUpBtn.textContent = 'Удаление...'
//     api.deleteCard(card._id)
//       .then(res => checkServeкResp(res))
//       .then(res => {
//         item.removeCard()
//         popupConfirm.closePopUp()
//       })
//       .catch(err => console.log(err))
//       .finally(() => confirmPopUpBtn.textContent = 'Да')
//   }
// }, '.confirm-pop-up');
const popupConfirm = new PopupWithConfirm({
  handleSaveBtnClick: (cardEl, card) => {
    confirmPopUpBtn.textContent = 'Удаление...'
    console.log(card._id)
    api.deleteCard(card._id)
      .then(res => checkServeкResp(res))
      .then(res => {
        cardEl.remove()
        popupConfirm.closePopUp()
      })
      .catch(err => console.log(err))
      .finally(() => confirmPopUpBtn.textContent = 'Да')
  }
}, '.confirm-pop-up');

const popupEditAvaForm = new PopupWithForm({
  handleSubmitForm: (item) => {
    console.log(item)
    editAvatarSaveBtn.textContent = 'Сохранение...'
    api.changeAvatar({avatar: item.link})
      .then(res => checkServeкResp(res))
      .then(res => {
        user.setUserInfo(res)
        popupEditAvaForm.closePopUp()
      })
      .catch(err => console.log(err))
      .finally(() => editAvatarSaveBtn.textContent = 'Сохранить')
  }
}, '.edit-avatar-pop-up')

const popupAddingCard = new PopupWithForm({
  handleSubmitForm: (item) => {
    console.log(item)
    addingSaveBtn.textContent = 'Сохранение...'
    api.addNewCard({ name: item.name, link: item.link })
      .then(res => checkServeкResp(res))
      .then(res => {
        const cardEl = createCard(res);
        defaultCardList.addItem(cardEl);
        popupAddingCard.closePopUp()
      })
      .catch(err => console.log(err))
      .finally(() => addingSaveBtn.textContent = 'Сохранить')
  }
}, '.add-card-pop-up')

const popupEditProfile = new PopupWithForm({
  handleSubmitForm: (item) => {
    editingSaveBtn.textContent = 'Сохранение...'
    api.editUserInfo({ name: item.name, about: item.activity })
      .then(res => checkServeкResp(res))
      .then(res => {
        user.setUserInfo(res)
        popupEditProfile.closePopUp()

      })
      .catch(err => console.log(err))
      .finally(() => editingSaveBtn.textContent = 'Сохранить')
  }
}, '.edit-pop-up')

const handleCardClick = (card) => {
  popupWithImage.openPopUp(card)
}

const handleDeleteBtn = (cardEl, card) => {
  console.log(card)
  popupConfirm.openPopUp(cardEl, card)
}

const handleCardLike = (cardRef, isLiked) => {
  console.log(cardRef)
  console.log(cardRef.card)

  api.handleLike(cardRef.card._id, isLiked)
  .then(res => checkServeкResp(res))
  .then(res => {
    cardRef.card.likes = res.likes
    cardRef.calculateLikes()
  })
  .catch(err => console.log(err))
}

let defaultCardList;

function createCard(item) {
  const cardItem = new Card({ card: item, handleCardClick, handleDeleteBtn , handleCardLike}, '#card-template')
  const cardElement = cardItem.createCard();
  if(cardItem.hideDeleteBtn(user.userInfo._id)) {
      cardElement.querySelector('.card__delete-btn').setAttribute('hidden', '')
  }
  return cardElement
}

function openeditAvatarPopUp() {
  popupEditAvaForm.openPopUp()
}

function openEditingProfilePopUp() {
  const editForm = forms.find(item => item.form.classList.contains('pop-up__edit-form'))
  editForm.clearForm()
  const userInfo = user.getUserInfo()
  editingFormName.value = userInfo.profileName;
  editingFormActivity.value = userInfo.profileActivity;
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
  const editAvaFormValidator = new FormValidator(configuration, editAvatarForm)

  forms.push(editFormValidator, cardFormValidator)

  editFormValidator.enabledValidation();
  cardFormValidator.enabledValidation();
  editAvaFormValidator.enabledValidation();
}
function checkServeкResp(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

api.getUserInfo()
  .then(res => checkServeкResp(res))
  .then(res => user.setUserInfo(res))
  .catch(err => console.log(err))

api.getInitialCards()
  .then(res => checkServeкResp(res))
  .then(res => {
    defaultCardList = new Section({
      items: res.reverse(),
      renderer: (item) => {
        const cardEl = createCard(item);
        defaultCardList.addItem(cardEl);
      }
    }, '.cards__list');

    defaultCardList.renderAll()
  })
  .catch(err => console.log(err))

editingBtn.addEventListener('click', openEditingProfilePopUp);
addingCardBtn.addEventListener('click', openAddingCardPopUp);
editAvatarBtn.addEventListener('click', openeditAvatarPopUp);

setValidation();