interface ContentTypePhonetics {
  text?: string,
  audio: string,
  sourceUrl: string,
  license: {
      name: string,
      url: string
  }
}

export type ContentDefinitionType = {
    definition: string,
    synonyms: string[],
    antonyms: string[],
    example?: string
}

interface ContentTypeMeanings {
  partOfSpeech: string,
  definitions: ContentDefinitionType[],
  synonyms: string[],
  antonyms: string[]
}

interface ContentType {
    word: string,
    phonetics: contentTypePhonetics | '',
    meanings: contentTypeMeanings[],
    license?: {
        name: string,
        url: string
    },
    sourceUrls: string
}

export type FontOptions = "Sans serif" | 'Serif' | 'Mono'

export type DataContentType = ContentType[]
export type ContentType = ContentType

