import GetOrder from "./GetOrder";
import RepositoryMemoryFactory from "./RepositoryMemoryFactory";

const memoryFactory = new RepositoryMemoryFactory();
const getOrder = new GetOrder(memoryFactory);
const order = getOrder.execute(10);
console.log(order);
