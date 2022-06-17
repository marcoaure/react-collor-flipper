import { render, screen } from "@testing-library/react";
import ColorLabel from "./ColorLabel";


describe("<ColorLabel />", () => {
    it("should be rendered", () => {
        render(<ColorLabel />)
        const colorLabel = screen.getByTestId("color-label")
        expect(colorLabel).toBeTruthy()
    })

    it("should have an text: `Background Color: red` by props", () => {
        render(<ColorLabel color={"red"} />)
        const colorLabel = screen.getByTestId("color-label")
        
        expect(colorLabel.textContent).toBe("Background Color: red")
    })
})

