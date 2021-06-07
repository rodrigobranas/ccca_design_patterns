import Order from "./Order";

export default class OnlineOrder extends Order {

    calculateTax(total: number): number {
        return total * 0.2;
    }
}
