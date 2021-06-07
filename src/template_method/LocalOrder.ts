import Order from "./Order";

export default class LocalOrder extends Order {

    calculateTax(total: number): number {
        return total * 0.3;
    }
}
