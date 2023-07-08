import { ContentDefinitionType, ContentTypeMeanings } from "../../../../types"

interface Props {
  content: ContentTypeMeanings[]
}

export default function ContentMeaningList({ content = [] }: Props) {
  return (
    <ul>
        {
            content[0].definitions.map((elem: ContentDefinitionType, index: number) => (
                <li key={index}><span>{elem.definition}</span></li>
            ))
        }
    </ul>
  )
}