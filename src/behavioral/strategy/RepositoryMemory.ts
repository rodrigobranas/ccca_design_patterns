import Entity from "./Entity";
import Repository from "./Repository";

export default class RepositoryMemory implements Repository {

    save(entity: Entity): void {
        console.log("memory save entity");
    }
    get(id: Entity): void {
        console.log("memory get entity");
    }
    update(entity: Entity): void {
        console.log("memory update entity");
    }
    delete(id: Entity): void {
        console.log("memory delete entity");
    }
    count(): number {
        console.log("memory count entities");
        return 10;
    }    
}
