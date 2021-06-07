import Product from "./Product";

const productA = new Product("Lamp", 100);
const productB = productA.clone();
console.log(productA);
console.log(productB);
