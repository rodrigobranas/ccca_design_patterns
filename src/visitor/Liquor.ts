import Product from "./Product";
import Visitable from "./Visitable";
import Visitor from "./Visitor";

export default class Liquor implements Visitable, Product {
    price: number;

    constructor (price: number) {
        this.price = price;
    }
    
    accept(visitor: Visitor): void {
        return visitor.visit(this);
    }

}