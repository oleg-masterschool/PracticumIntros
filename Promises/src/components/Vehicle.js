const vehicleSelector = '.vehicle';
export const vehicleImageSelector = '.vehicle__image';
const vehicleActiveClass = 'vehicle_is-active';

export class Vehicle {
    constructor(selector) {
        this._selector = selector;
        this._element;
        this._handleClick = this._handleImageClick.bind(this);
        this.hollerInterval;
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector(vehicleSelector)
            .cloneNode(true);
    }

    _hollerCallback() {
        const hollersElement = this._element.querySelector('.vehicle__hollers');
        const holler = document
            .querySelector('.holler')
            .content
            .querySelector('.holler__item')
            .cloneNode(true);

        hollersElement.append(holler);
    }

    _handleImageClick() {
        this._element
            .classList.toggle(vehicleActiveClass);

        clearInterval(this.hollerInterval);

        if (this._element.classList.contains(vehicleActiveClass)
            && this._element.classList.contains('water')) {
            this.hollerInterval = setInterval(this._hollerCallback.bind(this), 500);
        }
    }


    _setEventListeners() {
        this._element
            .addEventListener("click", () => {
                this._handleClick();
            });
    }
}