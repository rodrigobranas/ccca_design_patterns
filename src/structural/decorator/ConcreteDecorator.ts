import Component from "./Component";
import Decorator from "./Decorator";

export default class ConcreteDecorator extends Decorator {
    constructor(id: Number, component: Component) {
        super(id, component);
    }

    public operation(): void {
        super.operation();
        console.log("`operation` of ConcreteDecorator", this.Id, " is being called!");
    }
}
