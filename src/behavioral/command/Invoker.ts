import Command from "./Command";

export default class Invoker {
    commands: Command[];

    constructor() {
        this.commands = [];
    }

    public storeAndExecute(cmd: Command) {
        this.commands.push(cmd);
        cmd.execute();
    }
}
