import { MouseEventHandler } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
    text?: string,
    callback?: MouseEventHandler
}

const Button = (props: ButtonProps) => <StyledButton onClick={props?.callback}>{props?.text}</StyledButton>;

export default Button;