import { useEffect, useState } from 'react'
import Header from './scenes/Header/Header'
import DefinitionNotFound from './scenes/Main/Content/components/DefinitionNotFound'
import MainContent from './scenes/Main/Content/MainContent'
import SearchBar from './scenes/Main/SearchBar/SearchBar'
import './styles/index.css'
import requestApi from './api/apiDictionary'
import formatData from './helpers/formatData'
import { FontOptions, type ContentType } from './types'
import { emptyMockObject, mockObject } from './test/mockObject'
import { BounceLoader } from 'react-spinners'

function App() {

  const [keyword, setKeyword] = useState('')
  const [content, setContent] = useState<ContentType>(mockObject)
  const [request, setRequest] = useState('idle')
  const [toggleTheme, setToggleTheme] = useState(false)
  const [fontFamily, setFontFamily] = useState<FontOptions>('Sans serif')

  const handleFontChange = (font: FontOptions) => {
    setFontFamily(font)
  }

  const handleToggleChange = () => {
    setToggleTheme(elem => !elem)
  }

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setRequest('loading')
  }

  useEffect(() => {

    const handleRequestApi = async () => {
      if(request === 'loading'){
        try {
          if(keyword !== ''){
            const response = await requestApi({ keyword: keyword })

            const dataFormated = formatData(response.data)
            setContent(dataFormated)
            setRequest('success')
            setRequest('idle')
          }
        } catch (error) {
          console.log(error)
          setRequest('error')
          setContent(emptyMockObject)
        }
      }
    }

    handleRequestApi()
    
  }, [request, keyword])

  return (
    <div className={`app ${toggleTheme === true ? 'dark' : ''}`}> 
      <div className={`app__container ${fontFamily === 'Sans serif' ? '' : fontFamily.toLocaleLowerCase()}`}>
        <Header 
          toggleChange={handleToggleChange} 
          fontFamily={fontFamily}
          fontChange={handleFontChange} />
        <SearchBar 
          keyword={keyword} 
          handleChange={handleKeywordChange}
          handleSubmit={handleSubmit} 
        />
        
        {
          request === 'error' 
          ?
          <DefinitionNotFound /> 
          :
          request === 'loading' ?
          <div className='loader'>
            <BounceLoader
              color="#A445ED"
              size={60}
            />
          </div>
           :
          <MainContent content={[content]}  />
        }
        
      </div>
    </div>
  )
}

export default App
