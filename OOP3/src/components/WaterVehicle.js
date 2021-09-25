import { Vehicle, vehicleImageSelector } from "./Vehicle.js";

const waterVehicleSelector = '.vehicle-template_type_water';

export class WaterVehicle extends Vehicle {
    constructor({ text, image, drivesOn, speed }, selector = waterVehicleSelector) {
        super(selector);
        this._text = text;
        this._image = image;
        this._speed = speed;
        this._element = super._getTemplate();
    }

    generateVehicle() {
        super._setEventListeners();

        this._element.querySelector(vehicleImageSelector).alt = this._text;
        this._element.querySelector(vehicleImageSelector).src = this._image;
        this._element.querySelector('.vehicle__speed').textContent = this._speed;
        return this._element;
    }
}
