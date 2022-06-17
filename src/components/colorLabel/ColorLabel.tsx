interface ColorLabelProps {
    color?: string
}

const ColorLabel = (props: ColorLabelProps) => <span data-testid="color-label">Background Color: {props.color}</span>;

export default ColorLabel;