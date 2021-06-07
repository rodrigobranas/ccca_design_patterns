import ConcreteComponent from "./ConcreteComponent";
import ConcreteDecorator from "./ConcreteDecorator";

const decorator1 = new ConcreteDecorator(1, new ConcreteComponent("Comp1"));
const decorator2 = new ConcreteDecorator(2, decorator1);
const decorator3 = new ConcreteDecorator(3, decorator2);
decorator1.operation();
decorator2.operation();
decorator3.operation();
