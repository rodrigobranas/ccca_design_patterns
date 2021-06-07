import Abstraction from "./Abstraction";

export default class ConcreteAbstractionA extends Abstraction {

    operation(): void {
        console.log("A");
        this.implementor.operation();
    }
}
