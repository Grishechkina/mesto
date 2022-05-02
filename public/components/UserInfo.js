export default class UserInfo {
  constructor({nameSelector, activitySelector}) {
    // this.nameSelector = nameSelector
    // this.activitySelector = activitySelector
    
 this.profileName = document.querySelector(nameSelector);
 this.profileActivity = document.querySelector(activitySelector);
  }

  getUserInfo() {

 return {profileName: this.profileName.textContent, profileActivity:this.profileActivity.textContent }
  }
  setUserInfo(newInfo) {
    this.profileName.textContent = newInfo.name
    this.profileActivity.textContent = newInfo.activity
  }
}