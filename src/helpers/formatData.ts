import { type ContentType, type DataContentType } from "../types"

const formatData = (data: DataContentType): ContentType => {
  const dataFormated: ContentType = {
    word: data[0].word,
    phonetics: data[0].phonetics.length === 0 ? '' : data[0].phonetics[1] || data[0].phonetics[0],
    meanings: data[0].meanings,
    sourceUrls: data[0].sourceUrls[0]
  }

  return dataFormated
}

export default formatData