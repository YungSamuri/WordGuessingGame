import { useState } from 'react'
import { Game } from './pages/Game'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);



  return (
    <Game incorrectGuesses={incorrectGuesses} setIncorrectGuesses={setIncorrectGuesses}/>
  )
}

export default App
