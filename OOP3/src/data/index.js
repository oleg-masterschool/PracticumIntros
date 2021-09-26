export const CONTEXT = {
    LAND: 'land',
    WATER: 'water'
}

export const vehicles = [
    {
        text: 'Tesla',
        image: './assets/tesla.png',
        speed: '260 km/h',
        drivesOn: CONTEXT.LAND
    }, {
        text: 'Truck',
        image: './assets/cyber-truck.png',
        speed: '190 km/h',
        drivesOn: CONTEXT.LAND
    }, {
        text: 'Boat',
        image: './assets/speedboat.png',
        speed: '80 knots',
        drivesOn: CONTEXT.WATER
    }
];
