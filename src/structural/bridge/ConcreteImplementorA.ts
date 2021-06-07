import Implementor from "./Implementor";

export default class ConcreteImplementorA implements Implementor {

    constructor () {

    }

    operation(): void {
        console.log("A");
    }
}
