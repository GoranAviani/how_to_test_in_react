import {getByTestId, render} from '@testing-library/react'
import Input from "./Input";

describe("input component test", () => {

    it("rendered input", () => {
        const {getByTestId} = render(<Input showDiv={false}/>)
        const input = getByTestId("search-bar")
        expect(input).toBeInTheDocument()

    })


    it("render div", () => {
        const {getByTestId} = render(<Input showDiv={true}/>)
        const greetingText = getByTestId("greeting-test")
        expect(greetingText).toBeInTheDocument()
    })

    it("dont render div", () => {
        const {getByTestId} = render ( <Input showDiv={false}/> )
        const greetingText = getByTestId("greeting-test")
        expect(greetingText).not.toBeTruthy()
    })

})