import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {

    get(id: number): Order {
        return new Order();
    }
}
