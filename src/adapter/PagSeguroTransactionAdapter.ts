import Transaction from "./Transaction";
import PagSeguroTransaction from "./PagSeguroTransaction";

export default class PagSeguroTransactionAdapter implements Transaction {
    trackNumber: string;
    amount: number;
    status: string;

    constructor (pagseguroTransaction: PagSeguroTransaction) {
        this.trackNumber = pagseguroTransaction.code;
        this.amount = pagseguroTransaction.grossAmount;
        this.status = this.convertStatus(pagseguroTransaction.status);
    }

    convertStatus(status: number): string {
        switch (status) {
            case 1: 
                return "waiting_payment";
            case 2:
                return "paid";
            case 3:
                return "cancelled";
            default:
                return "";
        }
    }
}
