import Order from "./Order";

export default interface OrderRepository {
    get(id: number): Order;
}
