export default class Context {
    tree: number[];

    constructor () {
        this.tree = [];
    }

    push (number: number) {
        this.tree.push(number);
    }

    pop (): number | undefined {
        return this.tree.pop();
    }
}
