export default class Card {

  constructor({card, handleCardClick}, cardSelector) {
    this.card = card;
    this.cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
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
    cardPhoto.addEventListener('click', () => this.handleCardClick(this.card));

    const likeBtn = this._element.querySelector('.card__like-btn');
    likeBtn.addEventListener('click', () => likeBtn.classList.toggle('card__like-btn_active'));

    const deleteBtn = this._element.querySelector('.card__delete-btn');
    deleteBtn.addEventListener('click', () => this._element.remove());
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardPhoto = this._element.querySelector('.card__photo');
    const cardTitle = this._element.querySelector('.card__title');
    cardPhoto.src = this.card.link;
    cardPhoto.alt = this.card.place;
    cardTitle.textContent = this.card.place;

    return this._element;
  }
}