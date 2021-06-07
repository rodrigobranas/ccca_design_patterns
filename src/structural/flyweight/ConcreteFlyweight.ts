import Flyweight from "./Flyweight";

export default class ConcreteFlyweight implements Flyweight {
    private instrinsicState: String;

    constructor(instrinsicState: String) {
        this.instrinsicState = instrinsicState;
    }

    public operation(s: String): void {
        console.log("`operation` of ConcreteFlyweight", s, " is being called!");
    }
}
