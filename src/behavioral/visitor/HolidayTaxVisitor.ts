import Product from "./Product";
import Visitor from "./Visitor";

export default class HolidayTaxVisitor implements Visitor {

    visit(product: Product): number {
        return product.price * 1.03;
    }
}
