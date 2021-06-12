import AbstractExpression from "./AbstractExpression";
import Context from "./Context";
import MinusExpression from "./MinusExpression";
import MultiplyExpression from "./MultiplyExpression";
import NumberExpression from "./NumberExpression";
import PlusExpression from "./PlusExpression";

export default class Parser {
    tree: AbstractExpression[];

    constructor (input: string) {
        this.tree = [];

        for (const token of input.split(" ")) {
            if (token === "+") {
                this.tree.push(new PlusExpression());
                continue;
            }
            if (token === "-") {
                this.tree.push(new MinusExpression());
                continue;
            }
            if (token === "*") {
                this.tree.push(new MultiplyExpression());
                continue;
            }
            this.tree.push(new NumberExpression(parseInt(token)));
        }
    }

    evaluate () {
        const context = new Context();
        for (const e of this.tree) {
            e.interpret(context);
        }
        return context.pop();
    }
}
