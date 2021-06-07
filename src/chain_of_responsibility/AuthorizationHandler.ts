import Handler from "./Handler";

export default class AuthorizationHandler extends Handler {
    constructor() {
        super();
    }
    public handlerRequest(req: string) {
        console.log("Authorization:", req);
        return true;
    }
}
