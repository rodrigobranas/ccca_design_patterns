import Component from "./Component";

export default class Decorator implements Component {
    private component: Component;
    private id: Number;

    constructor(id: Number, component: Component) {
        this.id = id;
        this.component = component;
    }

    public get Id(): Number {
        return this.id;
    }

    public operation(): void {
        console.log("`operation` of Decorator", this.id, " is being called!");
        this.component.operation();
    }
}
