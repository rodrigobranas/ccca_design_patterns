import AbstractFactory from "./AbstractFactory";
import ProductA from "./ProductA";
import ProductA2 from "./ProductA2";
import ProductB from "./ProductB";
import ProductB2 from "./ProductB2";

export default class Factory2 implements AbstractFactory {

    createProductA(): ProductA {
        return new ProductA2();
    }
    createProductB(): ProductB {
        return new ProductB2();
    }
}
