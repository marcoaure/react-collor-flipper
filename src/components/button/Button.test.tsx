import { render, screen } from "@testing-library/react";
import Button from "./Button";


describe("<Button />", () => {
    it("should be rendered and be an html button", () => {
        render(<Button />)
        expect(screen.getByRole("button")).toBeTruthy()
    })

    it("should my button accept prop name as button text", () => {
        render(<Button text={"This is an Test"} />)
        expect(screen.getByText(/This is an Test/i)).toBeTruthy()
    })
})

