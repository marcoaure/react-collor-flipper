import { render, screen } from "@testing-library/react";
import ColorLabel from "./ColorLabel";


describe("<ColorLabel />", () => {
    it("should be rendered and be an div", () => {
        render(<ColorLabel />)
        const searchForColorLabel = screen.getByTestId("color-label")
        expect(searchForColorLabel).toBeTruthy()
    })
})

