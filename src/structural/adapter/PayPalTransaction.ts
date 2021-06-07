export default class PayPalTransaction {
    id: string;
    amount: number;
    status: string;

    constructor (id: string, amount: number, status: string) {
        this.id = id;
        this.amount = amount;
        this.status = status;
    }
}
