import Observer from "./Observer";

export default class Button implements Observer {
    
    update(): void {
        console.log("Button was notified");
    }
}
