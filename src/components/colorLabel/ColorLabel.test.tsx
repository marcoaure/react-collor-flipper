import { render, screen } from "@testing-library/react";
import ColorLabel from "./ColorLabel";


describe("<ColorLabel />", () => {
    it("should be rendered", () => {
        render(<ColorLabel />)
        const colorLabel = screen.getByTestId("color-label")
        expect(colorLabel).toBeTruthy()
    })

    it("should have an text by props", () => {
        render(<ColorLabel text={"this is an test"} />)
        const colorLabel = screen.getByTestId("color-label")
        
        expect(colorLabel.textContent).toBe("this is an test")
    })
})

