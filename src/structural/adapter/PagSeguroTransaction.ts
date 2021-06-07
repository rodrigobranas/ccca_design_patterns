export default class PagSeguroTransaction {
    code: string;
    grossAmount: number;
    status: number;

    constructor (code: string, grossAmount: number, status: number) {
        this.code = code;
        this.grossAmount = grossAmount;
        this.status = status;
    }
}
