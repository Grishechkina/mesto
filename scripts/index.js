const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');
const editBtn = profile.querySelector('.profile__edit-btn');

const popUp = document.querySelector('.pop-up');

const editForm = document.querySelector('.pop-up__edit-form');
const editFormName = editForm.name;
const editFormActivity = editForm.activity;

const closeBtn = popUp.querySelector('.pop-up__close-btn');
const saveBtn = editForm.querySelector('.save-btn');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileActivity.textContent = editFormActivity.value;
  closeEditProfilePopup();
}

function closeEditProfilePopup() {
  popUp.classList.remove('pop-up_opened');
}

function openEditProfilePopup() {
  popUp.classList.add('pop-up_opened');
  editFormName.value = profileName.textContent;
  editFormActivity.value = profileActivity.textContent;
}

editBtn.addEventListener('click', openEditProfilePopup);
closeBtn.addEventListener('click', closeEditProfilePopup);
editForm.addEventListener('submit', handleProfileFormSubmit);