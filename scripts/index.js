let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileActivity = profile.querySelector('.profile__activity');
let editBtn = profile.querySelector('.profile__edit-btn');

let editForm = document.querySelector('.edit-form');
let editFormName = document.getElementById('name');
let editFormActivity = document.getElementById('activity');

let closeBtn = document.querySelector('.close-btn');
let saveBtn = editForm.querySelector('.save-btn')

let popUp = document.querySelector('.pop-up');

editFormName.value = profileName.textContent
editFormActivity.value = profileActivity.textContent

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = evt.target[0].value;
  profileActivity.textContent = evt.target[1].value;
  closeForm();
}

function closeForm() {
  popUp.classList.remove('pop-up_opened')
}

function openForm() {
  popUp.classList.add('pop-up_opened')
}

editBtn.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);
editForm.addEventListener('submit', formSubmitHandler);