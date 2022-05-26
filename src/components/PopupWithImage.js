import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this.imgPopUpPhoto = this.popup.querySelector('.img-pop-up__photo');
    this.imgPopUpTitle = this.popup.querySelector('.img-pop-up__title');
  }

  openPopUp(card) {
    this.imgPopUpPhoto.src = card.link;
    this.imgPopUpPhoto.alt = card.name;
    this.imgPopUpTitle.textContent = card.name;
    super.openPopUp();
  }
}