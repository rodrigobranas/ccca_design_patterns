import ProductA from "./ProductA";
import ProductB from "./ProductB";

export default interface AbstractFactory {
    createProductA (): ProductA;
    createProductB (): ProductB;
}
