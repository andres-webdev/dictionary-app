import {screen, render} from '@testing-library/react'
import "@testing-library/jest-dom"
import Header from '../Header'
import HeaderFontMenu from '../HeaderFontMenu'
import userEvent from '@testing-library/user-event'

const fontOptions = {
    first: "Sans serif",
    second: 'Serif',
    third: 'Mono'
}

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
    }),

    test("should render the font menu card component", () => {

        render(<HeaderFontMenu />)

        const fonts = screen.getAllByRole('heading', { level: 3 })

        const fontsMenu = fonts.map(elem => elem.textContent)

        expect(fonts.length).toBe(3)
        expect(fontsMenu[0]).toEqual(fontOptions.first)
        expect(fontsMenu[1]).toEqual(fontOptions.second)
        expect(fontsMenu[2]).toEqual(fontOptions.third)
    }),

    test("should render the font menu card component after the user click the menu botton", async () => {

        const user = userEvent.setup()

        render(<Header />)

        const buttons = screen.getByTestId('font-menu-btn')
        const fontMenu = screen.queryByTestId('fonts-menu')

        expect(fontMenu).not.toBeInTheDocument()

        await user.click(buttons)

        const showFontMenu = screen.getByTestId('fonts-menu')

        expect(showFontMenu).toBeInTheDocument()
    })
}) 