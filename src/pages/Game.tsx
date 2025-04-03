import { useEffect, useState } from "react";
import { WordDisplay } from "../WordDisplay";
import { UserInput } from "../UserInput";
import { Guesses } from "../Guesses";
import { useNavigate } from "react-router-dom";
import { getWord } from "../ApiQuery";


export function Game()
{
    const [guessedLetters, setGuessedLetters] = useState(new Set<string>())
    const [guessesLeft, setGuessesLeft] = useState<number>(7);
    const [word, setWord] = useState<string[]>(new Array());

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchWord() {
            setWord(await getWord());
        }

        fetchWord();
    }, []);

    useEffect(() => {
        if (guessesLeft <= 0) {
            navigate("/gameover", {state: guessesLeft});
        }
    }, [guessesLeft]);

    useEffect(() => {
        if (word.length > 1 && word.every((letter: string) => guessedLetters.has(letter))) {
            navigate("/gameover", {state: guessesLeft});
        }
    }, [guessedLetters]);

    return (
        <div className="content">
            <WordDisplay guessedLetters={guessedLetters} word={word}/>
            <UserInput guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} setIncorrectGuesses={setGuessesLeft} word={word}/>
            <Guesses incorrectGuesses={[...guessedLetters].filter((letter: string) => !word.includes(letter))} />
        </div>
    )
}
