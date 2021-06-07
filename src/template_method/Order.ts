import Item from "./Item";

export default abstract class Order {
    items: Item[];

    constructor () {
        this.items = [];
    }

    addItem (item: Item) {
        this.items.push(item);
    }

    abstract calculateTax (total: number): number;

    getTotal () {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        total += this.calculateTax(total);
        return total;
    }
}
