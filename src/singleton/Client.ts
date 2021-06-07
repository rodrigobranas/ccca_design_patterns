import Singleton from "./Singleton";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1);
console.log(singleton2);
