import Implementor from "./Implementor";

export default abstract class Abstraction {
    implementor: Implementor;

    constructor (implementor: Implementor) {
        this.implementor = implementor;
    }

    abstract operation (): void;
}
