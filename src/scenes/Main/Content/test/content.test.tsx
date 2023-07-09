import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import MainContent from "../MainContent";
import DefinitionNotFound from "../components/DefinitionNotFound";
import { mockObject } from "../../../../test/mockObject";
import AudioComponent from "../components/AudioComponent";
import userEvent from '@testing-library/user-event'
import ContentSection from "../components/ContentSection";

describe("Content component", () => {
    test('Should render the defination not found page', () => {
        render(<DefinitionNotFound />)

        const badFaceImg = screen.getByAltText('img-emogi')
        const subTitle = screen.getByRole('heading', { level: 3 })
        const paragraph = screen.getByTestId('paragraph')

        expect(badFaceImg).toBeInTheDocument()
        expect(subTitle.textContent).toEqual('No Definitions Found')
        expect(paragraph).toBeInTheDocument()
    })

    test("Should render audio component in the main content", async () => {

        const audio = mockObject.phonetics.audio

        render(<AudioComponent audio={audio} />)

        const playBtn = screen.getByAltText("play-botton")
        const pauseBtn = screen.queryByAltText("pause-botton")

        expect(playBtn).toBeInTheDocument()

        await userEvent.click(playBtn)

        waitFor(() => expect(pauseBtn).toBeInTheDocument())
    })

    test("Should render content section component in the main content", () => {

        render(<ContentSection content={mockObject.meanings} nameSection="noun" />)

        const sectionSubTitles = screen.getAllByRole('heading', {level: 4})
        const subTitles = screen.getByRole('heading', {level: 3})
        const synonymsLink = screen.getAllByRole('link')
        const listItems = screen.getAllByRole('listitem')

        expect(sectionSubTitles.length).toBe(2)
        expect(subTitles.textContent).toEqual(mockObject.meanings[0].partOfSpeech)
        expect(synonymsLink[0].textContent).toEqual(mockObject.meanings[0].synonyms[0])
        expect(listItems[0].textContent).toEqual(mockObject.meanings[0].definitions[0].definition)
    })

    test("Should render rest of main content", () => {

        render(<MainContent content={[mockObject]} />)

        const wordTitle = screen.getByRole('heading', {level: 1})
        const fonetic = screen.getByTestId("phonetic")
        const newWindow = screen.getByAltText("new-window")
        const articleLink = screen.getByText(mockObject.sourceUrls)

        expect(wordTitle).toBeInTheDocument()
        expect(fonetic).toBeInTheDocument()
        expect(newWindow).toBeInTheDocument()
        expect(articleLink.textContent).toEqual('https://en.wiktionary.org/wiki/hello')
    })
})