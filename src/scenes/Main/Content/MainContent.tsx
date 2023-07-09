import { type DataContentType } from "../../../types"
import AudioComponent from "./components/AudioComponent"
import ContentSection from "./components/ContentSection"
interface Props {
    content: DataContentType
}

export default function MainContent({ content }: Props){
    return (
        <main>
            <section className="main__section-title">
                <div>
                    <h1>{content[0].word}</h1>
                    <span data-testid='phonetic'>{content[0].phonetics.text}</span>
                </div>
                {
                    content[0].phonetics.audio &&
                    <AudioComponent audio={content[0].phonetics.audio} />
                }
            </section>
            <ContentSection content={[content[0].meanings[0]]} nameSection="noun" />
            <ContentSection content={[content[0].meanings[1] || []]} nameSection="verb" />
            <section className="main__section-sources">
                <h5>Source</h5>
                <a href={content[0].sourceUrls} target="blank">
                    <span>{content[0].sourceUrls}</span>
                    <img src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331217/dictonary-api/icon-new-window_oapxef.svg" alt="new-window" />
                </a>
            </section>
        </main>
    )
}