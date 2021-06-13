import AbstractFactory from "./AbstractFactory";
import OrderRepository from "./OrderRepository";

export default class GetOrder {
    orderRepository: OrderRepository;

    constructor (repositoryFactory: AbstractFactory) {
        this.orderRepository = repositoryFactory.createOrderRepository();
    }

    execute (id: number) {
        const order = this.orderRepository.get(id);
        return order;
    }
}