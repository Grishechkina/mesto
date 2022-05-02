import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopUp(card) {
    const imgPopUpPhoto = this.popup.querySelector('.img-pop-up__photo');
    const imgPopUpTitle = this.popup.querySelector('.img-pop-up__title');
    imgPopUpPhoto.src = card.link;
    imgPopUpPhoto.alt = card.place;
    imgPopUpTitle.textContent = card.place;
    super.openPopUp();
  }
}