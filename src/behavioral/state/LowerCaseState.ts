import State from "./State";
import StateContext from "./StateContext";
import UpperCaseState from "./UpperCaseState";

export default class LowerCaseState implements State {
    
    writeName(context: StateContext, name: string): void {
        console.log(name.toLowerCase());
        context.setState(new UpperCaseState());
    }
}
