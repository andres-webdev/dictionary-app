import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import SearchBar from "../SearchBar";

describe("Search bar component", () => {
    test("Should render the search bar", () => {
        const keyword = 'hello'
        const handleChange = jest.fn()
        const handleSubmit= jest.fn()

        render(<SearchBar keyword={keyword} handleChange={handleChange} handleSubmit={handleSubmit} />)

        const inputText = screen.getByRole('textbox')
        const searchIcon = screen.getByAltText("search-icon")

        expect(inputText).toBeInTheDocument()
        expect(searchIcon).toBeInTheDocument()
    })
})