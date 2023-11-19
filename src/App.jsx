
import { useState } from 'react';
import './App.css'
import Author from './components/Author';
import PhrasesContent from './components/PhrasesContent'
import quotes from './db/quotes.json'
import { getElements } from './utils/random'


const bg = ['bg1','bg2','bg3','bg4']

function App() {
  
  const [phrasesChange, setPhrasesChange] = useState(getElements(quotes))
  const [backgrounds, setBackgrounds] = useState(getElements(bg))
  

  const handleChangeState = () => {
    setPhrasesChange(getElements(quotes))
    setBackgrounds(getElements(bg))
  }

  return (
    <main className={`bg-change bg1 ${backgrounds}`}>

      <PhrasesContent phraseQ = {phrasesChange} handleChangeState = {handleChangeState} />
      
      <footer className='footer-autor'>
        <Author  authorProps = {phrasesChange} />
      </footer>

    </main>
  )
}

export default App
