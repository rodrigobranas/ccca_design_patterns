import Observer from "./Observer";

export default class ObserverB implements Observer {
    
    update(): void {
        console.log("B was notified");
    }
}
