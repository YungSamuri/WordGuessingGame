import { useEffect, useState } from "react";
import { WordDisplay } from "../WordDisplay";
import { UserInput } from "../UserInput";
import { getWord } from "../ApiQuery";

const word = "hello".split("");


export function Game(props: any)
{
    const { incorrectGuesses, setIncorrectGuesses } = props;
    const [word, setWord] = useState<string[]>(new Array());
    const [guessedLetters, setGuessedLetters] = useState(new Set<string>());

    useEffect(() => {
        async function fetchWord() {
            setWord(await getWord());
        }

        fetchWord();
    }, []);

    return (
        <div className="game">
            <WordDisplay guessedLetters={guessedLetters} word={word}/>
            <UserInput setGuessedLetters={setGuessedLetters} setIncorrectGuesses={setIncorrectGuesses} word={word}/>
        </div>
    )
}
