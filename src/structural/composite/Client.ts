import Composite from "./Composite";
import Leaf from "./Leaf";

const inputTextName = new Leaf("Name");
const buttonClose = new Leaf("Close");
const buttonSave = new Leaf("Save");

const dialog = new Composite("Dialog");

dialog.add(inputTextName);
dialog.add(buttonClose);
dialog.add(buttonSave);

const panel = new Composite("Panel");
panel.add(dialog);

panel.operation();
