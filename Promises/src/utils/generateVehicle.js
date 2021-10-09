import { vehicleImageSelector } from "../components/Vehicle.js";

export const addImage = (element, { _text, _image }) => {
    element.querySelector('.vehicle__image').alt = _text;
    element.querySelector(vehicleImageSelector).src = _image;

}

export const addSpeed = (element, { _speed }) => {
    element.querySelector('.vehicle__speed').textContent = _speed;
}