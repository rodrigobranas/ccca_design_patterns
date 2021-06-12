import LogHandler from "./LogHandler";
import AuthenticationHandler from "./AuthenticationHandler";
import AuthorizationHandler from "./AuthorizationHandler";

const reqs = ["Request 1", "Request 2", "Request 3"];

const logHandler = new LogHandler();
const authenticationHandler = new AuthenticationHandler();
const authorizationHandler = new AuthorizationHandler();

logHandler.setHandler(authenticationHandler);
authenticationHandler.setHandler(authorizationHandler);

for (const req of reqs) {
    logHandler.operation(req);
}
