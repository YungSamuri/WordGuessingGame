import { useState } from "react";
import { WordDisplay } from "../WordDisplay";
import { UserInput } from "../UserInput";
import { Guesses } from "../Guesses";


export function Game(props: any)
{
    const {setIncorrectGuesses, word } = props;
    const [guessedLetters, setGuessedLetters] = useState(new Set<string>());

    

    return (
        <div className="game">
            <WordDisplay guessedLetters={guessedLetters} word={word}/>
            <UserInput guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} setIncorrectGuesses={setIncorrectGuesses} word={word}/>
            <Guesses incorrectGuesses={[...guessedLetters].filter((letter: string) => !word.includes(letter))} />
        </div>
    )
}
