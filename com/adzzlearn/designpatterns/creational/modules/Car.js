//CAR ENUMS
export const TYPES = {
    SUV : 1,
    TRUCK : 2,
    SEDAN : 3,
    VAN : 4,
    COUPE : 5,
    WAGON : 6,
    CONVERTIBLE : 7,
    SPORTS_CAR : 8,
    DEISEL : 9,
    CROSSOVER: 10,
    LUXURY_CAR : 11,
    ELECTRIC : 12
}


export class Vehicle{
    constructor(manufacturer, model, type, engine) {
        this.model = model;
        this.type = type;
        this.engine = engine;
    }
}

export class SUV extends Vehicle{
    constructor(manufacturer,model,engine) {
        super(manufacturer, model, TYPES.SUV, engine);
    }
}

export class Truck extends Vehicle{

}

