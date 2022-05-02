import gelek from '../images/gelendzhik.jpg'
import kabar from '../images/kabardinka.jpg'
import murm from '../images/murmansk.jpg'
import myti from '../images/mytishchi.jpg'
import nino from '../images/nizhniy-novgorod.jpg'
import sevas from '../images/sevastopol.jpg'

export const initialCards = [
  {
    place: 'Геленджик',
    link: gelek
  },
  {
    place: 'Кабардинка',
    link: kabar
  },
  {
    place: 'Мурманск',
    link: murm
  },
  {
    place: 'Мытищи',
    link: myti
  },
  {
    place: 'Нижний Новгород',
    link: nino
  },
  {
    place: 'Севастополь',
    link: sevas
  },
];

export const closingBtns = document.querySelectorAll('.pop-up__close-btn');

export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileActivity = profile.querySelector('.profile__activity');

export const editingBtn = profile.querySelector('.profile__edit-btn');
export const editingPopUp = document.querySelector('.edit-pop-up');
export const editingForm = document.querySelector('.pop-up__edit-form');
export const editingFormName = editingForm.name;
export const editingFormActivity = editingForm.activity;

export const addingCardBtn = profile.querySelector('.profile__add-btn');
export const addingCardPopUp = document.querySelector('.add-card-pop-up');
export const addingCardForm = document.querySelector('.pop-up__add-card-form');

export const cardsList = document.querySelector('.cards__list');
export const forms = [];