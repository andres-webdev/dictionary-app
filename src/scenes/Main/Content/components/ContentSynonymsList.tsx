import { ContentTypeMeanings } from "../../../../types"

interface Props {
  content: ContentTypeMeanings[]
}

export default function ContentSynonymsList({ content = [] }: Props){
  return (
    <>
      {
        content[0].synonyms.length !== 0 && content[0].partOfSpeech === 'noun' &&
        <div className="main__section-synonyms">
            <span className="subtitle">Synonyms</span>
            {
                content[0].synonyms.map((elem: string, index: number) => (
                    <span key={index} className="item">
                        <a href={`https://en.wiktionary.org/wiki/${elem}`} target="blank">{elem}</a>
                    </span>
                ))
            }
        </div>
      }
    </>
  )
}