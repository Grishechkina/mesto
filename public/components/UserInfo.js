export default class UserInfo {
  constructor({ nameSelector, activitySelector, avatarSelector }) {
    this.profileName = document.querySelector(nameSelector);
    this.profileActivity = document.querySelector(activitySelector);
    this.profileAva = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return { profileName: this.profileName.textContent, profileActivity: this.profileActivity.textContent }
  }

  setUserInfo(newInfo) {
    console.log(newInfo)
    this.userInfo = newInfo
    this.profileName.textContent = newInfo.name
    this.profileActivity.textContent = newInfo.about
    this.profileAva.src = newInfo.avatar
  }
}