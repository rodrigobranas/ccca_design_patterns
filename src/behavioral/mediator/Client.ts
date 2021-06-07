import ConcreteColleagueA from "./ConcreteColleagueA";
import ConcreteColleagueB from "./ConcreteColleagueB";
import ConcreteMediator from "./ConcreteMediator";

const cm = new ConcreteMediator();
const c1 = new ConcreteColleagueA(cm);
const c2 = new ConcreteColleagueB(cm);
cm.addColleague(c1);
cm.addColleague(c2);

c1.send("`send` of ConcreteColleagueA is being called!");
c2.send("`send` of ConcreteColleagueB is being called!");
