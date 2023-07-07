import Header from './scenes/Header/Header'
//import DefinitionNotFound from './scenes/Main/Content/DefinitionNotFound'
import MainContent from './scenes/Main/Content/MainContent'
import SearchBar from './scenes/Main/SearchBar/SearchBar'
import './styles/index.css'

function App() {

  return (
    <div className='app'> 
      <div className='app__container'>
        <Header />
        <SearchBar />
        <MainContent />
        {/* <DefinitionNotFound /> */}
      </div>
    </div>
  )
}

export default App
