import { Vehicle } from "./Vehicle.js";
import { addImage, addSpeed } from "../utils/generateVehicle.js";

const landVehicleSelector = '.vehicle-template_type_land';

export class LandVehicle extends Vehicle {
    constructor({ text, image, speed }) {
        super(landVehicleSelector);
        this._text = text;
        this._image = image;
        this._speed = speed;
        this._element = super._getTemplate();
        this._movement = {
            'left': -20,
            'right': 20,
            'up': -30,
            'down': 30
        };
    }

    generateVehicle() {
        super._setEventListeners();

        this._element.querySelector('.vehicle__caption').textContent = this._text;
        addImage(this._element, this);
        addSpeed(this._element, this);

        return this._element;
    }
}