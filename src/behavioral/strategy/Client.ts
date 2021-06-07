import Context from "./Context";
import StrategyA from "./StrategyA";
import StrategyB from "./StrategyB";

const strategyA = new StrategyA();
const context1 = new Context(strategyA);
context1.operation();

const strategyB = new StrategyB();
const context2 = new Context(strategyB);
context2.operation();
