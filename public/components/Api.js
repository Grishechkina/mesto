export default class Api {
  constructor(options) {
    this.options = options;
  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-41/users/me', this.options)
  }

  getInitialCards() {
    return fetch('https://nomoreparties.co/v1/cohort-41/cards', this.options)
  }

  editUserInfo(body) {
    this._createOptions('PATCH', body)
    return fetch('https://nomoreparties.co/v1/cohort-41/users/me', this.options)
  }

  addNewCard(body) {
    this._createOptions('POST', body)
    return fetch('https://nomoreparties.co/v1/cohort-41/cards', this.options)
  }

  deleteCard(id) {
    this._createOptions('DELETE', {})
    return fetch(`https://nomoreparties.co/v1/cohort-41/cards/${id}`, this.options)
  }

  handleLike(id, isLiked) {
    if(isLiked) {
      this._createOptions('DELETE', {})
      return fetch(`https://nomoreparties.co/v1/cohort-41/cards/${id}/likes`, this.options)
    }
    this._createOptions('PUT', {})
    return fetch(`https://nomoreparties.co/v1/cohort-41/cards/${id}/likes`, this.options)
  }

  changeAvatar(body) {
    this._createOptions('PATCH', body)
    return fetch(`https://nomoreparties.co/v1/cohort-41/users/me/avatar`, this.options)
  }

  _createOptions(method, body) {
    this.options.method = method
    this.options.body = JSON.stringify(body)
  }
}