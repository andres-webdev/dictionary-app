import Header from './scenes/Header/Header'
import MainContent from './scenes/Main/Content/MainContent'
import SearchBar from './scenes/Main/SearchBar/SearchBar'
import './styles/index.css'

function App() {

  return (
    <div className='app dark'> 
      <Header />
      <SearchBar />
      <MainContent />
    </div>
  )
}

export default App
