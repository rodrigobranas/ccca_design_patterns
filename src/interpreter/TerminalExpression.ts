import AbstractExpression from "./AbstractExpression";
import Context from "./Context";

export default class TerminalExpression implements AbstractExpression {
    public interpret(context: Context): void {
        console.log("`interpret` method of TerminalExpression is being called!");
    }
}
