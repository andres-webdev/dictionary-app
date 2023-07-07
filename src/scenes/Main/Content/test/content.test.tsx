import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import MainContent from "../MainContent";
import DefinitionNotFound from "../DefinitionNotFound";

describe("Content component", () => {
    test("Should render the main content", () => {
        render(<MainContent />)

        const wordTitle = screen.getByRole('heading', {level: 1})
        const fonetic = screen.getByText("/ˈkiːbɔːd/")
        const playBtn = screen.getByAltText("play-botton")
        const newWindow = screen.getByAltText("new-window")
        const sectionSubTitles = screen.getAllByRole('heading', {level: 4})
        const subTitles = screen.getAllByRole('heading', {level: 3})

        expect(wordTitle).toBeInTheDocument()
        expect(playBtn).toBeInTheDocument()
        expect(fonetic).toBeInTheDocument()
        expect(newWindow).toBeInTheDocument()
        expect(sectionSubTitles.length).toBe(3)
        expect(subTitles.length).toBe(2)
    })

    test('Should render the defination not found page', () => {
        render(<DefinitionNotFound />)

        const badFaceImg = screen.getByAltText('img-emogi')
        const subTitle = screen.getByRole('heading', { level: 3 })
        const paragraph = screen.getByTestId('paragraph')

        expect(badFaceImg).toBeInTheDocument()
        expect(subTitle.textContent).toEqual('No Definitions Found')
        expect(paragraph).toBeInTheDocument()
    })
})