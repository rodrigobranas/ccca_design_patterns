import Visitor from "./Visitor";

export default interface Visitable {
    accept(visitor: Visitor): void;
}
