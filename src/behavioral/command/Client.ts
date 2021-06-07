import { ConcreteCommand1 } from "./ConcreteCommand1";
import { ConcreteCommand2 } from "./ConcreteCommand2";
import { Invoker } from "./Invoker";
import { Receiver } from "./Receiver";

const receiver = new Receiver();
const command1 = new ConcreteCommand1(receiver);
const command2 = new ConcreteCommand2(receiver);
const invoker = new Invoker();

invoker.storeAndExecute(command1);
invoker.storeAndExecute(command2);
invoker.storeAndExecute(command1);
