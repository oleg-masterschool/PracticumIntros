import { CONTEXT } from "../data/index.js";
import { LandVehicle } from "./LandVehicle.js";
import { WaterVehicle } from "./WaterVehicle.js";

export class Garage {
    constructor({ data }, selector) {
        this._items = data;
        this._container = document.querySelector(selector);
    }

    _setItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._items.forEach(item => {
            const vehicle = item.drivesOn === CONTEXT.LAND
                ? new LandVehicle(item)
                : new WaterVehicle(item);
            const vehicleElement = vehicle.generateVehicle();

            this._setItem(vehicleElement);
        })
    }
}
