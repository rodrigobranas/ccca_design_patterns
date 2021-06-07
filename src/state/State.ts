import StateContext from "./StateContext";

export default interface State {
    writeName (context: StateContext, name: string): void;
}
