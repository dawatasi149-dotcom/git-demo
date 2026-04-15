//class and object in js
class ToyotaCar{
    constructor(brand, milage) {
        console.log("creating a new class");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");

    }
    stop() {
        console.log("stop");
    }
}
class supra extends ToyotaCar {
    constructor(brand, milage, version) {
        super(brand, milage);
        this.version = version;
    }
}
let fortuner = new supra("fortuner", 10, "v10");
console.log(fortuner);