import * as popUp from './popUp.js'
export class Card {

  imgPopUp = popUp.findPopUp('.img-pop-up');
  imgPopUpPhoto = popUp.findPopUpElement(this.imgPopUp,'.img-pop-up__photo');
  imgPopUpTitle = popUp.findPopUpElement(this.imgPopUp,'.img-pop-up__title');

  constructor(card, cardSelector) {
    this.card = card;
    this.cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    const cardPhoto = this._element.querySelector('.card__photo');
    cardPhoto.addEventListener('click', () => this._openImgPopUp());

    const likeBtn = this._element.querySelector('.card__like-btn');
    likeBtn.addEventListener('click', () => likeBtn.classList.toggle('card__like-btn_active'));

    const deleteBtn = this._element.querySelector('.card__delete-btn');
    deleteBtn.addEventListener('click', () => this._element.remove());
  }

  _openImgPopUp() {
    this.imgPopUpPhoto.src = this.card.link;
    this.imgPopUpPhoto.alt = this.card.name;
    this.imgPopUpTitle.textContent = this.card.name;
    popUp.openPopUp(this.imgPopUp);
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardPhoto = this._element.querySelector('.card__photo');
    const cardTitle = this._element.querySelector('.card__title');
    cardPhoto.src = this.card.link;
    cardPhoto.alt = this.card.name;
    cardTitle.textContent = this.card.name;

    return this._element;
  }
}