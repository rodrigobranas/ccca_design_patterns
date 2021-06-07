import Subject from "./Subject";

export default class RealSubject implements Subject {
    private s: string;

    constructor(s: string) {
        this.s = s;
    }
    public doAction(): void {
        console.log("`doAction` of RealSubject", this.s, "is being called!");
    }
}
