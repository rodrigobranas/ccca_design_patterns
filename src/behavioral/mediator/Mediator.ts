import Colleague from "./Colleague";

export default interface Mediator {
    send(msg: string, colleague: Colleague): void;
}
