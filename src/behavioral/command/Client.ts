import StartCommand from "./StartCommand";
import StopCommand from "./StopCommand";
import RestartCommand from "./RestartCommand";
import Invoker from "./Invoker";
import Server from "./Server";

const server = new Server();
const start = new StartCommand(server);
const stop = new StopCommand(server);
const restart = new RestartCommand(server);
const invoker = new Invoker();

invoker.storeAndExecute(start);
invoker.storeAndExecute(restart);
invoker.storeAndExecute(stop);
console.log(invoker.commands);