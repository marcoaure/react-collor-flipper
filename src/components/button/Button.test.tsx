import { render, screen } from "@testing-library/react";
import Button from "./Button";


describe("<Button />", () => {
    it("should renders it", () => {
        render(<Button />)
        expect(screen.getByText(/hi/i)).toBeTruthy()
    })

    it("should be an html button", () => {
        render(<Button />)
        expect(screen.getByRole("button")).toBeTruthy()
    })
})

