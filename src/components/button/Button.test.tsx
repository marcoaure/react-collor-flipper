import { render, screen, fireEvent } from "@testing-library/react";
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

    it("should take an action on button click",() => {
        const someAction = jest.fn()
        render(<Button text={"This is an Test"} callback={someAction} />)
        
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(someAction).toBeCalled()
    })
})

