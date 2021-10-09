import { waterVehicleSelector } from "./WaterVehicle.js";

const vehicleSelector = '.vehicle';
export const vehicleImageSelector = '.vehicle__image';
const vehicleActiveClass = 'vehicle_is-active';

export class Vehicle {
    constructor(selector) {
        this._selector = selector;
        this._element;
        this._handleClick = this._handleImageClick.bind(this);
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector(vehicleSelector)
            .cloneNode(true);
    }

    _handleImageClick() {
        this._element
            .classList.toggle(vehicleActiveClass);
    }


    _setEventListeners() {
        this._element
            .addEventListener("click", () => {
                this._handleClick();
            });
    }
}