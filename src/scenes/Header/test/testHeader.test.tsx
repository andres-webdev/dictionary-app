import {screen, render} from '@testing-library/react'
import "@testing-library/jest-dom"
import Header from '../Header'

describe("Header section", () => {
    test("should render the header component", () => {
        render(<Header />)

        const logo = screen.getByAltText("logo-app")
        const [fontBtn, toggleBtn] = screen.getAllByRole("button")
        const toggleIcon = screen.getByTestId("toggle-icon")
        
        expect(logo).toBeInTheDocument()
        expect(fontBtn).toBeInTheDocument()
        expect(toggleBtn).toBeInTheDocument()
        expect(toggleIcon).toBeInTheDocument()
    })
}) 