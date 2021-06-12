import Entity from "./Entity";
import Repository from "./Repository";

export default class RepositoryDatabase implements Repository {
    
    save(entity: Entity): void {
        console.log("save entity");
    }
    get(id: number): void {
        console.log("get entity");
    }
    update(entity: Entity): void {
        console.log("update entity");
    }
    delete(id: number): void {
        console.log("delete entity");
    }
    count(): number {
        console.log("count entities");
        return 10;   
    }
}
