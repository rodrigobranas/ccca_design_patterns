import Observer from "./Observer";

export default class ObserverA implements Observer {
    
    update(): void {
        console.log("A was notified");
    }
}
