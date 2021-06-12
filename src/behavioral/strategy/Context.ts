import Entity from "./Entity";
import Repository from "./Repository";

export default class Context {
    repository: Repository;

    constructor (repository: Repository) {
        this.repository = repository;
    }

    operation () {
        const entity = new Entity();
        this.repository.save(entity);
    }
}
