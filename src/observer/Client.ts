import ObserverA from "./ObserverA";
import ObserverB from "./ObserverB";
import Subject from "./Subject";

const subject = new Subject();
subject.register(new ObserverA());
subject.register(new ObserverB());
subject.notifyAll();
