import { MouseEventHandler } from "react";

interface ButtonProps {
    text?: string,
    callback?: MouseEventHandler
}

const Button = (props: ButtonProps) => <button onClick={props?.callback}>{props?.text}</button>;

export default Button;