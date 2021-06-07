import MagicRoom from "./MagicRoom";
import MazeGame from "./MazeGame";
import Room from "./Room";

export default class MagicMazeGame extends MazeGame {

    makeRoom(): Room {
        return new MagicRoom();
    }
}
