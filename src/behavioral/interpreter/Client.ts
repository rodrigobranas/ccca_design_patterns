import Parser from "./Parser";

const parser = new Parser("3 4 + 2 * 1 +");
const result = parser.evaluate();
console.log(result);
