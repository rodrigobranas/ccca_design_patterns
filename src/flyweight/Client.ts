import FlyweightFactory from "./FlyweightFactory";

const factory = new FlyweightFactory();
const conc1 = factory.getFlyweight("conc1");
const conc2 = factory.getFlyweight("conc2");
const conc3 = factory.getFlyweight("conc2");
conc1.operation("1");
conc2.operation("2");
conc3.operation("3");
