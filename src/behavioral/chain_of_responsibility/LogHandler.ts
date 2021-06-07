import Handler from "./Handler";

export default class LogHandler extends Handler {
    constructor() {
        super();
    }
    public handlerRequest(req: string) {
        console.log("Log:", req);
        return true;
    }
}
