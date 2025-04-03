import { useEffect, useState } from "react";
import { WordDisplay } from "../WordDisplay";
import { UserInput } from "../UserInput";
import { getWord } from "../ApiQuery";

const word = "hello".split("");


export function Game(props: any)
{
    const [word, setWord] = useState<string[]>(new Array());
    const { incorrectGuesses, setIncorrectGuesses } = props;
    const [guessedLetters, setGuessedLetters] = useState(new Set<string>());

    useEffect(() => {
        
    });
    return (
        <div className="game">
            <WordDisplay guessedLetters={guessedLetters} word={word}/>
            <UserInput setGuessedLetters={setGuessedLetters} setIncorrectGuesses={setIncorrectGuesses} word={word}/>
        </div>
    )
}
