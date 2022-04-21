export function findPopUp(popUpSelector) {
  const popUp = document.querySelector(popUpSelector);
  return popUp;
}

export function findPopUpElement(popUp, popUpElSelector) {
  return popUp.querySelector(popUpElSelector);
}

export function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
  document.addEventListener('keydown', closeByEsc);
  popUp.addEventListener('click', closeByOverlay);
}

export function closePopUp(popUp) {
  popUp.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closeByEsc);
  popUp.removeEventListener('click', closeByOverlay);
}

export function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popUp = document.querySelector('.pop-up_opened');
    closePopUp(popUp);
  }
}

export function closeByOverlay(evt) {
  if (evt.target.classList.contains('pop-up_opened')) {
    closePopUp(evt.target);
  }
}