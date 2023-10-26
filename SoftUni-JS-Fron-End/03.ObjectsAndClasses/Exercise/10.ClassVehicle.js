class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.engine,
            quality: parts.engine * parts.power,

        };
        this.fuel = fuel;
    }

    drive(fuel){
        this.fuel-=fuel;
    }
}
let parts = {engine: 6, power: 100}
let vehicle = new Vehicle('V8', 'Italian', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);