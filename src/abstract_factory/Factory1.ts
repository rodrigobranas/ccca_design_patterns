import AbstractFactory from "./AbstractFactory";
import ProductA from "./ProductA";
import ProductA1 from "./ProductA1";
import ProductB from "./ProductB";
import ProductB1 from "./ProductB1";

export default class Factory1 implements AbstractFactory {

    createProductA(): ProductA {
        return new ProductA1();
    }
    createProductB(): ProductB {
        return new ProductB1();
    }
}
