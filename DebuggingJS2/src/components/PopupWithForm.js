import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popup.querySelector(".modal__form");
    }

    _getInputValues() {
        const inputs = [...this._formElement.querySelectorAll(".modal__input")];
        const inputValues = {};
        inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    _submitCallback = (e) => {
        e.preventDefault();
        this._handleSubmit(this._getInputValues());
    };

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener("submit", this._submitCallback);
    }

    close = () => {
        super.close();
        this._formElement.reset();
        this._formElement.removeEventListener("submit", this._submitCallback);    // <--- the line that was missing and caused the bug
    };

    open = () => {
        super.open();
    };
}