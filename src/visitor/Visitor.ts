import Product from "./Product";

export default interface Visitor {
    visit(product: Product): void;
}
