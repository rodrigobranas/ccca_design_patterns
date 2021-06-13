
import Mediator from "./Mediator";
import User from "./User";

const mediator = new Mediator();
const john = new User("John", mediator);
const clara = new User("Clara", mediator);
const ana = new User("Ana", mediator);

mediator.addUser(john);
mediator.addUser(clara);
mediator.addUser(ana);

john.send("Hello everyone!");
clara.send("Hello John!");
ana.send("Hi John!");
