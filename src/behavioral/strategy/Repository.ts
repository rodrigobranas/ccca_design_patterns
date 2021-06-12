import Entity from "./Entity";

export default interface Repository {
    save(entity: Entity): void;
    get(id: number): void;
    update(entity: Entity): void;
    delete(id: number): void;
    count(): number;
}
