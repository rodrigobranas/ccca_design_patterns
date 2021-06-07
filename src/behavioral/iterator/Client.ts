import { ConcreteIterator } from "./ConcreteIterator";

const array = [1,2,3,4,5,6,7,8,9];

const iterator = new ConcreteIterator(array);

while (iterator.hasNext()) {
    const element = iterator.next();
    console.log(element);
}
