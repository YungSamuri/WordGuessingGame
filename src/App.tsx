import { useEffect, useState } from 'react'
import { Game } from './pages/Game'
import { getWord } from "./ApiQuery";
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
    const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);
    const [word, setWord] = useState<string[]>(new Array());

    useEffect(() => {
          async function fetchWord() {
              setWord(await getWord());
          }
  
          fetchWord();
    }, []);

    useEffect(() => {
        if (incorrectGuesses >= 7) {
        // Set page to game over
        setIncorrectGuesses(0);
        }
    }, [incorrectGuesses]);

    return (
        <Outlet />
    )
}

export default App
