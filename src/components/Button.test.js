import {getByTestId, queryByTestId, render, fireEvent, act} from '@testing-library/react'
import Button from "./Button";

describe("button component test", () => {

        it("rendered button", () => {
            const {getByTestId} = render(<Button/>)
            const button = getByTestId("button")
            expect(button).toBeTruthy()
        })

        it("render one button before click", () => {
            const {getAllByTestId} = render(<Button/>)
            const buttonArray = getAllByTestId("button")
            expect(buttonArray).toHaveLength(1)
        })

/*
        it("render two buttons after click", () => {
            act(async () => {
                const {getAllByTestId} = render(<Button/>)
                const buttonArray = getAllByTestId("button")
                await fireEvent.click(buttonArray[0])
                expect(getAllByTestId("button")).toHaveLength(2)

            })

        })
*/
    }
)