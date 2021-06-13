import OrderRepository from "./OrderRepository";
import ProductRepository from "./ProductRepository";

export default interface AbstractFactory {
    createOrderRepository() : OrderRepository;
    createProductRepository(): ProductRepository;
}
