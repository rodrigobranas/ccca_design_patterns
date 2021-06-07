import Observer from "./Observer";

export default class Subject {
    observers: Observer[];

    constructor () {
        this.observers = [];
    }

    register (observer: Observer) {
        this.observers.push(observer);
    }

    unregister (observer: Observer) {
        const position = this.observers.indexOf(observer);
        this.observers.splice(position, 1);
    }

    notifyAll () {
        this.observers.forEach(observer => observer.update());
    }
}
