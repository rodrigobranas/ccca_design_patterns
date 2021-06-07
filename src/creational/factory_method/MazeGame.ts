import Room from "./Room";

export default abstract class MazeGame {
    rooms: Room[];

    constructor () {
        this.rooms = [];
        const room1 = this.makeRoom();
        const room2 = this.makeRoom();
        room1.connect(room2);
        this.rooms.push(room1);
        this.rooms.push(room2);
    }

    abstract makeRoom(): Room;
}
