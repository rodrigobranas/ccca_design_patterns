import Strategy from "./Strategy";

export default class Context {
    strategy: Strategy;

    constructor (strategy: Strategy) {
        this.strategy = strategy;
    }

    operation () {
        this.strategy.algorithm();
    }
}
