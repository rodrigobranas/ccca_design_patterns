import ImplementationA from "./ImplementationA";
import ImplementationB from "./ImplementationB";
import ImplementationC from "./ImplementationC";

export default class Facade {
    implementationA: ImplementationA;
    implementationB: ImplementationB;
    implementationC: ImplementationC;

    constructor () {
        this.implementationA = new ImplementationA();
        this.implementationB = new ImplementationB();
        this.implementationC = new ImplementationC();
    }

    operationA () {
        this.implementationA.operation();
    }

    operationB () {
        this.implementationB.operation();
    }

    operationC () {
        this.implementationC.operation();
    }

    operationABC () {
        this.implementationA.operation();
        this.implementationB.operation();
        this.implementationC.operation();
    }
}
