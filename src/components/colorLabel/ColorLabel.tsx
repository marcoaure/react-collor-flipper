interface ColorLabelProps {
    text?: string
}

const ColorLabel = (props: ColorLabelProps) => <span data-testid="color-label">{props.text}</span>;

export default ColorLabel;