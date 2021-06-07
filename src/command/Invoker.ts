import Command from "./Command";

export class Invoker {
    private commands: Command[];

    constructor() {
        this.commands = [];
    }

    public storeAndExecute(cmd: Command) {
        this.commands.push(cmd);
        cmd.execute();
    }
}
