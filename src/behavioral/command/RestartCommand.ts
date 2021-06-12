import Command from "./Command";
import Server from "./Server";

export default class RestartCommand extends Command {
    private server: Server;

    constructor(server: Server) {
        super();
        this.server = server;
    }

    public execute(): void {
        this.server.restart();
    }
}
