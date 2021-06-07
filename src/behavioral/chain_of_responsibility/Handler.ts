export default abstract class Handler {
    private handler?: Handler;

    constructor() {
    }

    public setHandler(handler: Handler): void {
        this.handler = handler;
    }

    public operation(req: string): void {
        if (this.handlerRequest(req)) {
            this.handler?.operation(req);
        }
    }

    abstract handlerRequest(msg: string): boolean;
}
