import {getByTestId, queryByTestId, render, fireEvent, act} from '@testing-library/react'
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
        expect(greetingText).toBeTruthy()
    })

    it("dont render div", () => {
        const {queryByTestId} = render(<Input showDiv={false}/>)
        const greetingText = queryByTestId("greeting-test")
        expect(greetingText).toBeFalsy()
    })


    it("change on input causes change on header",  () => {
        act(async () => {
            const {getByTestId} = render(<Input showDiv={false}/>)
            const input = getByTestId("search-bar")
            const header = getByTestId("display-search")

            const userInput = "Oliver"
            await fireEvent.change(input, {target: {value: userInput}})

            expect(header.innerHtml).toBe(userInput)
        })


    })

})