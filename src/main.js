let beCar = document.getElementById('demo');
beCar.innerHTMl = Car;

class Car {
    constructor(name) {
        this.brand = name;
    }
}

const mycar = new  Car('Husama Tamimu Adam');