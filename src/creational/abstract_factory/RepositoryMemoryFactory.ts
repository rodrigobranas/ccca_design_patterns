import AbstractFactory from "./AbstractFactory";
import OrderRepository from "./OrderRepository";
import OrderRepositoryMemory from "./OrderRepositoryMemory";
import ProductRepository from "./ProductRepository";
import ProductRepositoryMemory from "./ProductRepositoryMemory";

export default class RepositoryMemoryFactory implements AbstractFactory {

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }
    createProductRepository(): ProductRepository {
        return new ProductRepositoryMemory();
    }
}
