import Command from "./Command";
import { Receiver } from "./Receiver";

export class ConcreteCommand1 extends Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        super();
        this.receiver = receiver;
    }

    public execute(): void {
        console.log("`execute` method of ConcreteCommand1 is being called!");
        this.receiver.action();
    }
}
