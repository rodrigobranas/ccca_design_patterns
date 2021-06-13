import AbstractFactory from "./AbstractFactory";
import OrderRepository from "./OrderRepository";
import OrderRepositoryDatabase from "./OrderRepositoryDatabase";
import ProductRepository from "./ProductRepository";
import ProductRepositoryDatabase from "./ProductRepositoryDatabase";

export default class RepositoryDatabaseFactory implements AbstractFactory {

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryDatabase();
    }
    createProductRepository(): ProductRepository {
        return new ProductRepositoryDatabase();
    }
}
