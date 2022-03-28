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
const editingSaveBtn = editingForm.querySelector('.form__save-btn');

const addingCardBtn = profile.querySelector('.profile__add-btn');
const addingCardPopUp = document.querySelector('.add-card-pop-up');
const addingCardForm = document.querySelector('.pop-up__add-card-form');
const addingSaveBtn = addingCardForm.querySelector('.form__save-btn');

const imgPopUp = document.querySelector('.img-pop-up');
const imgPopUpPhoto = imgPopUp.querySelector('.img-pop-up__photo');
const imgPopUpTitle = imgPopUp.querySelector('.img-pop-up__title');

const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.cards__list');

function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
  document.addEventListener('keydown', closeByEsc);
  popUp.addEventListener('click', closeByOverlay);
}

function closePopUp(popUp) {
  popUp.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closeByEsc);
  popUp.removeEventListener('click', closeByOverlay);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popUp = document.querySelector('.pop-up_opened');
    closePopUp(popUp);
  }
}
function closeByOverlay(evt) {
  if(evt.target.classList.contains('pop-up_opened')) {
    closePopUp(evt.target);
  }
}
function openEditingProfilePopUp() {
  editingFormName.value = profileName.textContent;
  editingFormActivity.value = profileActivity.textContent;
  openPopUp(editingPopUp);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editingFormName.value;
  profileActivity.textContent = editingFormActivity.value;
  closePopUp(editingPopUp);
  editingSaveBtn.setAttribute('disabled', '');
  editingSaveBtn.classList.add('form__save-btn_disabled')
}

function openImgPopUp(card) {
  imgPopUpPhoto.src = card.link;
  imgPopUpPhoto.alt = card.name;
  imgPopUpTitle.textContent = card.name;
  openPopUp(imgPopUp);
}

function handleAddingCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {name: addingCardForm.place.value, link: addingCardForm.link.value};
  addCard(card);
  closePopUp(addingCardPopUp);
  addingCardForm.reset();
  addingSaveBtn.setAttribute('disabled', '');
  addingSaveBtn.classList.add('form__save-btn_disabled');
}

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardPhoto = cardElement.querySelector('.card__photo');
  const cardTitle = cardElement.querySelector('.card__title');

  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;
  cardTitle.textContent = item.name;
  cardPhoto.addEventListener('click', () => openImgPopUp(item))

  const likeBtn = cardElement.querySelector('.card__like-btn');
  likeBtn.addEventListener('click', () => likeBtn.classList.toggle('card__like-btn_active'));

  const deleteBtn = cardElement.querySelector('.card__delete-btn');
  deleteBtn.addEventListener('click', () => cardElement.remove());

  return cardElement
}

function addCard(card) {
  const cardElement = createCard(card);
  cardsList.prepend(cardElement);
}

initialCards.forEach(card => addCard(card));
closingBtns.forEach(btn => btn.addEventListener('click', (evt) => closePopUp(evt.target.closest('.pop-up'))));
enabledValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-btn',
  disabledButtonClass: 'form__save-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error'
})

editingBtn.addEventListener('click', openEditingProfilePopUp);
editingForm.addEventListener('submit', handleProfileFormSubmit);

addingCardBtn.addEventListener('click', () => openPopUp(addingCardPopUp));
addingCardForm.addEventListener('submit', handleAddingCardFormSubmit);
