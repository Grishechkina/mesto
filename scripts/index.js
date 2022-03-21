const initialCards = [
  {
    name: 'Геленджик',
    link: '../images/gelendzhik.jpg'
  },
  {
    name: 'Кабардинка',
    link: '../images/kabardinka.jpg'
  },
  {
    name: 'Мурманск',
    link: '../images/murmansk.jpg'
  },
  {
    name: 'Мытищи',
    link: '../images/mytishchi.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: '../images/nizhniy-novgorod.jpg'
  },
  {
    name: 'Севастополь',
    link: '../images/sevastopol.jpg'
  },
];

const closeBtns = document.querySelectorAll('.pop-up__close-btn');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');

const editBtn = profile.querySelector('.profile__edit-btn');
const editPopUp = document.querySelector('.edit-pop-up');
const editForm = document.querySelector('.pop-up__edit-form');
const editFormName = editForm.name;
const editFormActivity = editForm.activity;

const addCardBtn = profile.querySelector('.profile__add-btn');
const addCardPopUp = document.querySelector('.add-card-pop-up');
const addCardForm = document.querySelector('.pop-up__add-card-form');

const imgPopUp = document.querySelector('.img-pop-up');
const imgPopUpPhoto = imgPopUp.querySelector('.img-pop-up__photo');
const imgPopUpTitle = imgPopUp.querySelector('.img-pop-up__title');

const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.cards__list');

function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
}

function closePopUp(popUp) {
  popUp.classList.remove('pop-up_opened');
}

function openEditProfilePopUp() {
  editFormName.value = profileName.textContent;
  editFormActivity.value = profileActivity.textContent;
  openPopUp(editPopUp);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileActivity.textContent = editFormActivity.value;
  closePopUp(editPopUp);
}

function openImgPopUp(card) {
  imgPopUpPhoto.src = card.link;
  imgPopUpPhoto.alt = card.name;
  imgPopUpTitle.textContent = card.name;
  openPopUp(imgPopUp);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {name: addCardForm.place.value, link: addCardForm.link.value};
  addCard(card);
  closePopUp(addCardPopUp);
  addCardForm.place.value = '';
  addCardForm.link.value = '';
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
  
closeBtns.forEach(btn => btn.addEventListener('click', (evt) => closePopUp(evt.target.closest('.pop-up'))));

editBtn.addEventListener('click', openEditProfilePopUp);
editForm.addEventListener('submit', handleProfileFormSubmit);

addCardBtn.addEventListener('click', () => openPopUp(addCardPopUp));
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
