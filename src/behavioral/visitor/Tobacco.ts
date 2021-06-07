import Product from "./Product";
import Visitable from "./Visitable";
import Visitor from "./Visitor";

export default class Tobacco implements Visitable, Product {
    price: number;

    constructor (price: number) {
        this.price = price;
    }
    
    accept(visitor: Visitor): void {
        return visitor.visit(this);
    }

}