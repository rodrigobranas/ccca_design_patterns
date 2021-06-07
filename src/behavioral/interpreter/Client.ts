import Context from "./Context";
import NonterminalExpression from "./NonTerminalExpression";
import TerminalExpression from "./TerminalExpression";

var context = new Context();
const list = [];

list.push(new NonterminalExpression());
list.push(new NonterminalExpression());
list.push(new NonterminalExpression());
list.push(new TerminalExpression());
list.push(new NonterminalExpression());
list.push(new NonterminalExpression());
list.push(new TerminalExpression());
list.push(new TerminalExpression());

for (let i = 0, max = list.length; i < max; i += 1) {
    list[i].interpret(context);
}
