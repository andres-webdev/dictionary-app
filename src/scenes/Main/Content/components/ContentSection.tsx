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
              <h2>{nameSection}</h2>
              <figure>
                  <div className="separator"></div>
              </figure>
          </div>
          <span className="main__section__divider">Meaning</span>
          <ContentMeaningList content={content} />
          <ContentSynonymsList content={content} />
        </section>
      }
    </>
  )
}