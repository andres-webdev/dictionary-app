import { ContentTypeMeanings } from "../../../../types";
import ContentMeaningList from "./ContentList";
import ContentSynonymsList from "./ContentSynonymsList";

interface Props {
  nameSection: string
  content: ContentTypeMeanings[]
}

export default function ContentSection({ nameSection, content = [] }: Props) {
  return (
    <>
      {
        content.find(elem => elem.partOfSpeech === nameSection) &&
        <section className="main__section">
          <div>
              <h3>{nameSection}</h3>
              <figure>
                  <div className="separator"></div>
              </figure>
          </div>
          <h2>Meaning</h2>
          <ContentMeaningList content={content} />
          <ContentSynonymsList content={content} />
        </section>
      }
    </>
  )
}