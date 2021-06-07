import Strategy from "./Strategy";

export default class StrategyA implements Strategy {
    
    algorithm(): void {
        console.log("Algorithm A");
    }
}
