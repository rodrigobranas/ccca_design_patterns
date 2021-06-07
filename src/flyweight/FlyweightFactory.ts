import ConcreteFlyweight from "./ConcreteFlyweight";
import Flyweight from "./Flyweight";

export default class FlyweightFactory {

    private fliesMap: { [s: string]: Flyweight; } = <any>{};

    constructor() { }

    public getFlyweight(key: string): Flyweight {

        if (this.fliesMap[key] === undefined || null) {
            console.log(`Creating the object ${key}`);
            this.fliesMap[key] = new ConcreteFlyweight(key);
        }
        return this.fliesMap[key];
    }
}
