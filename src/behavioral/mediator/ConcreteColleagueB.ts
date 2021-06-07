import Colleague from "./Colleague";
import Mediator from "./Mediator";

export default class ConcreteColleagueB extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    public send(msg: string): void {
        this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
        console.log(msg, "`receive` of ConcreteColleagueB is being called!");
    }
}
