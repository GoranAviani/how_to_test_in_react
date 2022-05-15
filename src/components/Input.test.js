import {render} from '@testing-library/react'
import Input from "./Input";

describe("input component test", ()=>{

    it("rendered input", ()=>{
        const {getByTestId} = render(<Input/>)
        const input = getByTestId("search-bar")
        expect(input).toBeTruthy()

    })


})