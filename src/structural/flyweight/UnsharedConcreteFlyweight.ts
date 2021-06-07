import Flyweight from "./Flyweight";

export default class UnsharedConcreteFlyweight implements Flyweight {
    private allState: number;

    constructor(allState: number) {
        this.allState = allState;
    }

    public operation(s: String): void {
        console.log("`operation` of UnsharedConcreteFlyweight", s, " is being called!");
    }
}
