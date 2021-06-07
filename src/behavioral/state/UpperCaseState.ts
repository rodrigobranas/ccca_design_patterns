import LowerCaseState from "./LowerCaseState";
import State from "./State";
import StateContext from "./StateContext";

export default class UpperCaseState implements State {
    count: number;

    constructor () {
        this.count = 0;
    }

    writeName(context: StateContext, name: string): void {
        console.log(name.toUpperCase());
        this.count++;
        if (this.count > 1) {
            context.setState(new LowerCaseState());
        }
    }
}
