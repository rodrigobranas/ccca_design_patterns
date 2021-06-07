import Prototype from "./Prototype";

export default class Product implements Prototype {
    name: string;
    price: number;

    constructor (name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    clone(): Prototype {
        return new Product(this.name, this.price);
    }
}
