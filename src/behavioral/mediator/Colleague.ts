import Mediator from "./Mediator";

export default abstract class Colleague {
    public mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    abstract send(msg: string): void;
    
    abstract receive(msg: string): void;
}
