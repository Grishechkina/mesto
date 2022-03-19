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

const cardsList = document.querySelector('.cards__list');

function openPopUp(popUp) {
  const closeBtn = popUp.querySelector('.pop-up__close-btn');
  closeBtn.addEventListener('click', () => closePopUp(popUp));
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
  const imgPopUp = document.querySelector('.img-pop-up');
  const photo = imgPopUp.querySelector('.img-pop-up__photo');
  const title = imgPopUp.querySelector('.img-pop-up__title');
  photo.src = card.link;
  photo.alt = card.name;
  title.textContent = card.name;
  openPopUp(imgPopUp);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {name: addCardForm.place.value, link: addCardForm.link.value}
  addCard(card);
  closePopUp(addCardPopUp);
}

function addCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardPhoto = cardElement.querySelector('.card__photo');
  const cardTitle = cardElement.querySelector('.card__title');
  cardPhoto.src = card.link;
  cardPhoto.alt = card.name;
  cardTitle.textContent = card.name;
  cardPhoto.addEventListener('click', () => openImgPopUp(card))
  
  const likeBtn = cardElement.querySelector('.card__like-btn');
  likeBtn.addEventListener('click', () => likeBtn.classList.toggle('card__like-btn_active'))

  const deleteBtn = cardElement.querySelector('.card__delete-btn');
  deleteBtn.addEventListener('click', () => cardElement.style.display = 'none');

  cardsList.prepend(cardElement);
}

initialCards.forEach(card => addCard(card));

editBtn.addEventListener('click', openEditProfilePopUp);
editForm.addEventListener('submit', handleProfileFormSubmit);

addCardBtn.addEventListener('click', () => openPopUp(addCardPopUp));
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
