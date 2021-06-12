import Expression from "./Expression";
import Button from "./Button";
import InputText from "./InputText";

const inputText = new InputText();
inputText.register(new Expression());
inputText.register(new Button());
inputText.notifyAll();
