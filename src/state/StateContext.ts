import LowerCaseState from "./LowerCaseState";
import State from "./State";

export default class StateContext {
    state: State;

    constructor () {
        this.state = new LowerCaseState();
    }

    setState (state: State) {
        this.state = state;
    }

    writeName(name: string) {
        this.state.writeName(this, name);
    }
}
