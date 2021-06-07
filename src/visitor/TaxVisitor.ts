import Product from "./Product";
import Visitor from "./Visitor";

export default class TaxVisitor implements Visitor {

    visit(product: Product): number {
        return product.price * 1.1;
    }
}
