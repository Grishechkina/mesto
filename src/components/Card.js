export default class Card {

  constructor({ card, handleCardClick, handleDeleteBtn, handleCardLike, userId }, cardSelector) {
    this.card = card;
    this.cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleDeleteBtn = handleDeleteBtn;
    this.handleCardLike = handleCardLike
    this.userId = userId
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

    this.likeBtn = this._element.querySelector('.card__like-btn');
    this.likeBtn.addEventListener('click', () => {
      this.handleCardLike(this, this.likeBtn.classList.contains('card__like-btn_active'))
    })

    const deleteBtn = this._element.querySelector('.card__delete-btn');
    deleteBtn.addEventListener('click', () => this.handleDeleteBtn(this._element, this.card));
  }

  hideDeleteBtn(currUserId) {
    return this.card.owner && currUserId !== this.card.owner._id
  }

  calculateLikes() {
    if (this.card.likes && this.card.likes.length) {
      this.cardLikeCount.textContent = this.card.likes.length
    } else {
      this.cardLikeCount.textContent = ''
    }
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    if (this.hideDeleteBtn(this.userId)) {
      this._element.querySelector('.card__delete-btn').setAttribute('hidden', '')
    }
    if (this.card.likes.some(like => like._id === this.userId)) {
      this.likeBtn.classList.add('card__like-btn_active')
    }
    this.cardLikeCount = this._element.querySelector('.card__like-counter');

    const cardPhoto = this._element.querySelector('.card__photo');
    const cardTitle = this._element.querySelector('.card__title');

    cardPhoto.src = this.card.link;
    cardPhoto.alt = this.card.name;
    cardTitle.textContent = this.card.name;
    this.calculateLikes()
    return this._element;
  }
}