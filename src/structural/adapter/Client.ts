import PagSeguroTransaction from "./PagSeguroTransaction";
import PagSeguroTransactionAdapter from "./PagSeguroTransactionAdapter";
import PayPalTransaction from "./PayPalTransaction";
import PayPalTransactionAdapter from "./PayPalTransactionAdapter";

const pagSeguroTransaction = new PagSeguroTransaction("AB3HB987HBG7568", 1000, 2);
const transaction1 = new PagSeguroTransactionAdapter(pagSeguroTransaction);
console.log(transaction1);

const paypalTransaction = new PayPalTransaction("9879", 100, "S");
const transaction2 = new PayPalTransactionAdapter(paypalTransaction);
console.log(transaction2);