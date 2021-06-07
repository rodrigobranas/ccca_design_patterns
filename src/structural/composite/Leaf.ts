import Component from "./Component";

export default class Leaf implements Component {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public operation(): void {
        console.log("`operation` of Leaf", this.s, " is called.");
    }
}
