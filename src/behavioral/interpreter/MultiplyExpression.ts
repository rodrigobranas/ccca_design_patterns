import AbstractExpression from "./AbstractExpression";
import Context from "./Context";

export default class MultiplyExpression implements AbstractExpression {

    interpret (context: Context) {
        const operand1 = context.pop();
        const operand2 = context.pop();
        if (!operand1 || !operand2) throw new Error("Invalid Operation");
        context.push(operand1 * operand2);
    }
}
