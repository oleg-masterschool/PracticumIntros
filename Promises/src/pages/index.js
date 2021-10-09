import { Garage } from "../components/Garage.js";
import { vehicles } from "../data/index.js";

const garageSelector = '.garage';

const vehiclesInventory = new Garage({ data: vehicles }, garageSelector);

vehiclesInventory.renderItems();