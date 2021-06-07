import LogHandler from "./LogHandler";
import AuthenticationHandler from "./AuthenticationHandler";
import AuthorizationHandler from "./AuthorizationHandler";

const reqs = ["1", "2", "3"];

const h1 = new LogHandler();
const h2 = new AuthenticationHandler();
const h3 = new AuthorizationHandler();

h1.setHandler(h2);
h2.setHandler(h3);

for (const req of reqs) {
    h1.operation(req);
}
