export default class Card {

  constructor({card, handleCardClick, handleDeleteBtn, handleCardLike}, cardSelector) {
    this.card = card;
    this.cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleDeleteBtn = handleDeleteBtn;
    this.handleCardLike = handleCardLike
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
    likeBtn.addEventListener('click', () =>  {
      this.handleCardLike(this, likeBtn.classList.contains('card__like-btn_active'))
      likeBtn.classList.toggle('card__like-btn_active')
      console.log(likeBtn.classList.contains('card__like-btn_active'))
      
    })

    const deleteBtn = this._element.querySelector('.card__delete-btn');
    deleteBtn.addEventListener('click', () => this.handleDeleteBtn(this._element, this.card));
  }

  hideDeleteBtn(currUserId) {
    return this.card.owner && currUserId !== this.card.owner._id
  }

  calculateLikes() {
    const cardLikeCount = this._element.querySelector('.card__like-counter');
    if(this.card.likes && this.card.likes.length) {
      cardLikeCount.textContent = this.card.likes.length
    } else {
      cardLikeCount.textContent = ''
    }
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardPhoto = this._element.querySelector('.card__photo');
    const cardTitle = this._element.querySelector('.card__title');
    
    cardPhoto.src = this.card.link;
    cardPhoto.alt = this.card.name;
    cardTitle.textContent = this.card.name;
    console.log(this.card)
    this.calculateLikes()
    return this._element;
  }
}