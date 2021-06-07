import ConcreteAbstractionA from "./ConcreteAbstractionA";
import ConcreteImplementorA from "./ConcreteImplementorA";
import ConcreteImplementorB from "./ConcreteImplementorB";

const concreteImplementorA = new ConcreteImplementorA();
const concreteImplementorB = new ConcreteImplementorB();
const abstraction1 = new ConcreteAbstractionA(concreteImplementorA);
abstraction1.operation();
const abstraction2 = new ConcreteAbstractionA(concreteImplementorB);
abstraction2.operation();
