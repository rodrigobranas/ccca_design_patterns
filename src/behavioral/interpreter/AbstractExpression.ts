import Context from "./Context";

export default interface AbstractExpression {
    interpret(context: Context): void;
}
