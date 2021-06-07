import RealSubject from "./RealSubject";
import Subject from "./Subject";

export default class Proxy implements Subject {
    private realSubject: RealSubject | undefined;
    private s: string;

    constructor(s: string) {
        this.s = s;
    }

    public doAction(): void {
        console.log("`doAction` of Proxy(", this.s, ")");
        if (this.realSubject === null || this.realSubject === undefined) {
            console.log("creating a new RealSubject.");
            this.realSubject = new RealSubject(this.s);
        }
        this.realSubject.doAction();
    }
}
