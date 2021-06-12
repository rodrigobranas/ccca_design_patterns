import Observer from "./Observer";

export default class Expression implements Observer {
    
    update(): void {
        console.log("Expression was notified");
    }
}
