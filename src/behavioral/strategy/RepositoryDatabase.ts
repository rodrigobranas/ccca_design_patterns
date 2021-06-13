import Entity from "./Entity";
import Repository from "./Repository";

export default class RepositoryDatabase implements Repository {
    
    save(entity: Entity): void {
        console.log("database save entity");
    }
    get(id: number): void {
        console.log("database get entity");
    }
    update(entity: Entity): void {
        console.log("database update entity");
    }
    delete(id: number): void {
        console.log("database delete entity");
    }
    count(): number {
        console.log("database count entities");
        return 10;   
    }
}
