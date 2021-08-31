function addCarColor(cars, color) {
    const paintedCars = [];
    for (let i = 0; i <= cars.length; i++) {
        paintedCars.push({ make: cars[i], color: color});
    }

    return paintedCars;
}

function main() {
    const cars = ['Toyota', 'Mitsubishi', 'Saab'];

    console.log(addCarColor(cars, 'green'));
}

main();