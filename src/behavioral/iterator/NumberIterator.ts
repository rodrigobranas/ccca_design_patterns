import Iterator from "./Iterator";

export default class NumberIterator implements Iterator {

    private collection: number[] = [];
    private position: number = 0;

    constructor(collection: number[]) {
        this.collection = collection;
    }

    public next(): number {
        var result = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}
