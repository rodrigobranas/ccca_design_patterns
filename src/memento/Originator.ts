import Memento from "./Memento";

export default class Originator {
    state: string;

    constructor(state: string) {
        this.state = state;
    }

    createMemento(): Memento {
        console.log("creates a memento with a given state!");
        return new Memento(this.state);
    }

    setMemento(memento: Memento) {
        console.log("sets the state back");
        this.state = memento.state;
    }
}
