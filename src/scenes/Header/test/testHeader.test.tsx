import {screen, render} from '@testing-library/react'
import "@testing-library/jest-dom"
import Header from '../Header'
import HeaderFontMenu from '../components/HeaderFontMenu'
import userEvent from '@testing-library/user-event'

const fontOptions = {
    first: "Sans serif",
    second: 'Serif',
    third: 'Mono'
}

describe("Header section", () => {
    test("should render the header component", () => {

        const toggleChange = jest.fn()
        const fontChange = jest.fn()
        const fontFamily = 'Mono'

        render(<Header toggleChange={toggleChange} fontChange={fontChange} fontFamily={fontFamily} />)

        const logo = screen.getByAltText("logo-app")
        const [fontBtn, toggleBtn] = screen.getAllByRole("button")
        const toggleIcon = screen.getByTestId("toggle-icon")
        
        expect(logo).toBeInTheDocument()
        expect(fontBtn).toBeInTheDocument()
        expect(toggleBtn).toBeInTheDocument()
        expect(toggleIcon).toBeInTheDocument()
    }),

    test("should render the font menu card component", () => {

        const fontChange = jest.fn() 
        const showFontMenu = jest.fn()

        render(<HeaderFontMenu fontChange={fontChange} showFontMenu={showFontMenu} />)

        const fonts = screen.getAllByRole('heading', { level: 3 })

        const fontsMenu = fonts.map(elem => elem.textContent)

        expect(fonts.length).toBe(3)
        expect(fontsMenu[0]).toEqual(fontOptions.first)
        expect(fontsMenu[1]).toEqual(fontOptions.second)
        expect(fontsMenu[2]).toEqual(fontOptions.third)
    }),

    test("should render the font menu card component after the user click the menu botton", async () => {

        const user = userEvent.setup()
        const toggleChange = jest.fn()
        const fontChange = jest.fn()
        const fontFamily = 'Mono'

        render(<Header toggleChange={toggleChange} fontChange={fontChange} fontFamily={fontFamily} />)


        const buttons = screen.getByTestId('font-menu-btn')
        const fontMenu = screen.queryByTestId('fonts-menu')

        expect(fontMenu).not.toBeInTheDocument()

        await user.click(buttons)

        const showFontMenu = screen.getByTestId('fonts-menu')
        const fonts = screen.getAllByRole('heading', { level: 3 })

        expect(showFontMenu).toBeInTheDocument()

        await user.click(fonts[0])

        expect(showFontMenu).not.toBeInTheDocument()
    })
}) 