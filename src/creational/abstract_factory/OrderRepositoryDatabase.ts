import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryDatabase implements OrderRepository {
    
    get(id: number): Order {
        throw new Error("Method not implemented.");
    }
}
