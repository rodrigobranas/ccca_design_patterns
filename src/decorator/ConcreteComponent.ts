import Component from "./Component";

export default class ConcreteComponent implements Component {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public operation(): void {
        console.log("`operation` of ConcreteComponent", this.s, " is being called!");
    }
}
