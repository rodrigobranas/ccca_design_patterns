import MazeGame from "./MazeGame";
import OrdinaryRoom from "./OrdinaryRoom";
import Room from "./Room";

export default class OrdinaryMazeGame extends MazeGame {

    makeRoom(): Room {
        return new OrdinaryRoom();
    }
}
