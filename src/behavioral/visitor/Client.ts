import HolidayTaxVisitor from "./HolidayTaxVisitor";
import Liquor from "./Liquor";
import TaxVisitor from "./TaxVisitor";
import Tobacco from "./Tobacco";

const taxVisitor = new TaxVisitor();
const holidayTaxVisitor = new HolidayTaxVisitor();

const liquor = new Liquor(10);
console.log(liquor.accept(taxVisitor));
console.log(liquor.accept(holidayTaxVisitor));

const tobacco = new Tobacco(20);
console.log(tobacco.accept(taxVisitor));
console.log(tobacco.accept(holidayTaxVisitor));
