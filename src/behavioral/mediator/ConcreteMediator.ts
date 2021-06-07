import Colleague from "./Colleague";
import ConcreteColleagueA from "./ConcreteColleagueA";
import ConcreteColleagueB from "./ConcreteColleagueB";
import Mediator from "./Mediator";

export default class ConcreteMediator implements Mediator {
    colleagues: Colleague[];

    constructor () {
        this.colleagues = [];
    }

    addColleague(colleague: Colleague) {
        this.colleagues.push(colleague);
    }

    public send(msg: string, colleague: Colleague): void {
        for (const c of this.colleagues) {
            if (c !== colleague) c.receive(msg);
        }
    }
}
