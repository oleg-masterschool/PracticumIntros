export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _closeOnClickOutside = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  setEventListeners() {
    this._popup
      .querySelector(".modal__close")
      .addEventListener("click", this.close);
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener("mousedown", this._closeOnClickOutside);
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add("modal_open");
  }

  close() {
    this._popup
      .querySelector(".modal__close")
      .removeEventListener("click", this.close);
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.removeEventListener("mousedown", this._closeOnClickOutside);
    this._popup.classList.remove("modal_open");
  }
}
