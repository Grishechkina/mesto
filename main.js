(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.card,o=e.handleCardClick,i=e.handleDeleteBtn,c=e.handleCardLike,a=e.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.card=r,this.cardSelector=n,this.handleCardClick=o,this.handleDeleteBtn=i,this.handleCardLike=c,this.userId=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this.cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__photo").addEventListener("click",(function(){return e.handleCardClick(e.card)})),this.likeBtn=this._element.querySelector(".card__like-btn"),this.likeBtn.addEventListener("click",(function(){e.handleCardLike(e,e.likeBtn.classList.contains("card__like-btn_active"))})),this._element.querySelector(".card__delete-btn").addEventListener("click",(function(){return e.handleDeleteBtn(e._element,e.card)}))}},{key:"hideDeleteBtn",value:function(e){return this.card.owner&&e!==this.card.owner._id}},{key:"calculateLikes",value:function(){this.card.likes&&this.card.likes.length?this.cardLikeCount.textContent=this.card.likes.length:this.cardLikeCount.textContent=""}},{key:"toggleLike",value:function(){this.likeBtn.classList.toggle("card__like-btn_active")}},{key:"createCard",value:function(){var e=this;this._element=this._getTemplate(),this._setEventListeners(),this.hideDeleteBtn(this.userId)&&this._element.querySelector(".card__delete-btn").setAttribute("hidden",""),this.card.likes.some((function(t){return t._id===e.userId}))&&this.likeBtn.classList.add("card__like-btn_active"),this.cardLikeCount=this._element.querySelector(".card__like-counter");var t=this._element.querySelector(".card__photo"),n=this._element.querySelector(".card__title");return t.src=this.card.link,t.alt=this.card.name,n.textContent=this.card.name,this.calculateLikes(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formSelector=t.formSelector,this.inputSelector=t.inputSelector,this.submitButtonSelector=t.submitButtonSelector,this.disabledButtonClass=t.disabledButtonClass,this.inputErrorClass=t.inputErrorClass,this.errorClass=t.errorClass,this.form=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){e.classList.add(this.inputErrorClass);var n=this.form.querySelector(".".concat(e.name,"-input-error"));n.textContent=t,n.classList.add(this.errorClass)}},{key:"_hideInputError",value:function(e){e.classList.remove(this.inputErrorClass);var t=this.form.querySelector(".".concat(e.name,"-input-error"));t.textContent="",t.classList.remove(this.errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListener",value:function(){var e=this;this.inputList=Array.from(this.form.querySelectorAll(this.inputSelector)),this.saveButton=this.form.querySelector(this.submitButtonSelector),this._toggleButtonState(),this.inputList.forEach((function(t){return t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this.saveButton.classList.add(this.disabledButtonClass),this.saveButton.setAttribute("disabled","")):(this.saveButton.classList.remove(this.disabledButtonClass),this.saveButton.removeAttribute("disabled"))}},{key:"enabledValidation",value:function(){this.form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}},{key:"clearForm",value:function(){var e=this;this.inputList.forEach((function(t){t.value="",e._hideInputError(t)})),this._toggleButtonState()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderAll",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this.closingBtn=this.popup.querySelector(".pop-up__close-btn"),this._closeByEsc=this._closeByEsc.bind(this),this._closeByOverlay=this._closeByOverlay.bind(this),this.closePopUp=this.closePopUp.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._closeByEsc),this.popup.addEventListener("click",this._closeByOverlay),this.closingBtn.addEventListener("click",this.closePopUp)}},{key:"openPopUp",value:function(){this.popup.classList.add("pop-up_opened"),this.setEventListeners()}},{key:"closePopUp",value:function(){this.popup.classList.remove("pop-up_opened"),document.removeEventListener("keydown",this._closeByEsc),this.popup.removeEventListener("click",this._closeByOverlay),this.closingBtn.removeEventListener("click",this.closePopUp)}},{key:"_closeByEsc",value:function(e){"Escape"===e.key&&this.closePopUp()}},{key:"_closeByOverlay",value:function(e){e.target.classList.contains("pop-up_opened")&&this.closePopUp()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).imgPopUpPhoto=t.popup.querySelector(".img-pop-up__photo"),t.imgPopUpTitle=t.popup.querySelector(".img-pop-up__title"),t}return t=c,(n=[{key:"openPopUp",value:function(e){this.imgPopUpPhoto.src=e.link,this.imgPopUpPhoto.alt=e.name,this.imgPopUpTitle.textContent=e.name,u(d(c.prototype),"openPopUp",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function c(e,t){var n,r=e.handleSaveBtnClick;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t))._handleSaveBtnClick=r,n._saveBtn=n.popup.querySelector(".classic-btn"),n._confirmDialog=n._confirmDialog.bind(S(n)),n}return t=c,(n=[{key:"openPopUp",value:function(e,t){this._elem=e,this._data=t,b(w(c.prototype),"openPopUp",this).call(this)}},{key:"closePopUp",value:function(){b(w(c.prototype),"closePopUp",this).call(this),this._saveBtn.removeEventListener("click",this._confirmDialog)}},{key:"setEventListeners",value:function(){b(w(c.prototype),"setEventListeners",this).call(this),this._saveBtn.addEventListener("click",this._confirmDialog)}},{key:"_confirmDialog",value:function(){this._handleSaveBtnClick(this._elem,this._data)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a),O=(document.querySelectorAll(".pop-up__close-btn"),document.querySelector(".profile")),E=O.querySelector(".profile__edit-btn"),L=(document.querySelector(".edit-pop-up"),document.querySelector(".pop-up__edit-form")),C=(L.name,L.activity,O.querySelector(".profile__add-btn")),B=(document.querySelector(".add-card-pop-up"),document.querySelector(".pop-up__add-card-form"),document.querySelector(".confirm-pop-up").querySelector(".classic-btn")),U=document.querySelector(".profile__overlay");function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}document.querySelector(".pop-up__edit-avatar-form"),document.querySelector(".cards__list");var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function c(e,t){var n,r=e.handleSubmitForm,o=e.getInitialData;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t))._handleSubmitForm=r,n.getInitialData=o,n.form=n.popup.querySelector(".form"),n.saveBtn=n.form.querySelector(".form__save-btn"),n._submitForm=n._submitForm.bind(D(n)),n._inputList=n.form.querySelectorAll(".form__input"),n._formValues={},n}return t=c,n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_submitForm",value:function(e){e.preventDefault(),this._handleSubmitForm(this._getInputValues(),this)}},{key:"setEventListeners",value:function(){q(x(c.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",this._submitForm)}},{key:"renderLoading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Сохранить";this.saveBtn.textContent=e}},{key:"openPopUp",value:function(){this.getInitialData&&this.setInputValues(this.getInitialData()),q(x(c.prototype),"openPopUp",this).call(this)}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"closePopUp",value:function(){this.form.removeEventListener("submit",this._submitForm),q(x(c.prototype),"closePopUp",this).call(this),this.form.reset()}}],n&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.nameSelector,r=t.activitySelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.profileName=document.querySelector(n),this.profileActivity=document.querySelector(r),this.profileAva=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.profileName.textContent,activity:this.profileActivity.textContent}}},{key:"setUserInfo",value:function(e){this.userInfo=e,this.profileName.textContent=e.name,this.profileActivity.textContent=e.about,this.profileAva.src=e.avatar}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z,J,$=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.options={headers:t.headers}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch(this.baseUrl+"/users/me",this.options).then(this._checkServerResp)}},{key:"getInitialCards",value:function(){return fetch(this.baseUrl+"/cards",this.options).then(this._checkServerResp)}},{key:"editUserInfo",value:function(e){return this._createOptions("PATCH",e),fetch(this.baseUrl+"/users/me",this.options).then(this._checkServerResp)}},{key:"addNewCard",value:function(e){return this._createOptions("POST",e),fetch(this.baseUrl+"/cards",this.options).then(this._checkServerResp)}},{key:"deleteCard",value:function(e){return this._createOptions("DELETE",{}),fetch("".concat(this.baseUrl,"/cards/").concat(e),this.options).then(this._checkServerResp)}},{key:"handleLike",value:function(e,t){return t?(this._createOptions("DELETE",{}),fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),this.options).then(this._checkServerResp)):(this._createOptions("PUT",{}),fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),this.options).then(this._checkServerResp))}},{key:"changeAvatar",value:function(e){return this._createOptions("PATCH",e),fetch("".concat(this.baseUrl,"/users/me/avatar"),this.options).then(this._checkServerResp)}},{key:"_createOptions",value:function(e,t){this.options.method=e,this.options.body=JSON.stringify(t)}},{key:"_checkServerResp",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"13ad9a03-10d1-4fa8-bf7f-d95899c835fe","Content-Type":"application/json"}}),G={},K=new y(".img-pop-up"),Q=new N({nameSelector:".profile__name",activitySelector:".profile__activity",avatarSelector:".profile__avatar"}),W=new P({handleSaveBtnClick:function(e,t){B.textContent="Удаление...",$.deleteCard(t._id).then((function(t){e.remove(),W.closePopUp()})).catch((function(e){return console.log(e)})).finally((function(){return B.textContent="Да"}))}},".confirm-pop-up"),X=new F({handleSubmitForm:function(e,t){t.renderLoading("Сохранение..."),$.changeAvatar({avatar:e.link}).then((function(e){Q.setUserInfo(e),X.closePopUp()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoading()}))}},".edit-avatar-pop-up"),Y=new F({handleSubmitForm:function(e,t){t.renderLoading("Сохранение..."),$.addNewCard({name:e.name,link:e.link}).then((function(e){var t=re(e);z.addItem(t),Y.closePopUp()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoading()}))}},".add-card-pop-up"),Z=new F({handleSubmitForm:function(e,t){t.renderLoading("Сохранение..."),$.editUserInfo({name:e.name,about:e.activity}).then((function(e){Q.setUserInfo(e),Z.closePopUp()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoading()}))},getInitialData:function(){return Q.getUserInfo()}},".edit-pop-up"),ee=function(e){K.openPopUp(e)},te=function(e,t){W.openPopUp(e,t)},ne=function(e,t){$.handleLike(e.card._id,t).then((function(t){e.card.likes=t.likes,e.calculateLikes(),e.toggleLike()})).catch((function(e){return console.log(e)}))};function re(e){return new t({card:e,handleCardClick:ee,handleDeleteBtn:te,handleCardLike:ne,userId:Q.userInfo._id},"#card-template").createCard()}J={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save-btn",disabledButtonClass:"form__save-btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error"},Array.from(document.querySelectorAll(J.formSelector)).forEach((function(e){var t=new r(J,e),n=e.getAttribute("name");G[n]=t,t.enabledValidation()})),Promise.all([$.getUserInfo(),$.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];Q.setUserInfo(o),(z=new i({items:c.reverse(),renderer:function(e){var t=re(e);z.addItem(t)}},".cards__list")).renderAll()})).catch((function(e){return console.log(e)})),E.addEventListener("click",(function(){G["profile-edit-form"].clearForm(),Z.openPopUp()})),C.addEventListener("click",(function(){G["add-card-form"].clearForm(),Y.openPopUp()})),U.addEventListener("click",(function(){G["avatar-edit-form"].clearForm(),X.openPopUp()}))})();