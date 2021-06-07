import AbstractExpression from "./AbstractExpression";
import Context from "./Context";

export default class NonterminalExpression implements AbstractExpression {

    public interpret(context: Context): void {
        console.log("`interpret` method of NonterminalExpression is being called!");
    }
}
