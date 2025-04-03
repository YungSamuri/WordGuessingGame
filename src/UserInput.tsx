import { useEffect, useState } from "react";

export function UserInput(props: any) {
    const { guessedLetters, setGuessedLetters, setIncorrectGuesses, word } = props;
    const [currentLetter, setCurrentLetter] = useState("");
    const [errorMessage, setErrorMessage] = useState("Please enter a letter");

    useEffect(() => {
        function keydown(e: KeyboardEvent) {
            if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
                setCurrentLetter(e.key.toLowerCase());
            } 
            else if (e.key === "Enter") {
                if (currentLetter === "") {
                    setErrorMessage("Please enter a letter");
                    return;
                }

                if (guessedLetters.has(currentLetter)) {
                    setCurrentLetter("");
                    setErrorMessage("Already Guessed!");
                    return;
                }

                setGuessedLetters((prev: Set<string>) => {
                    const newSet = new Set(prev);
                    newSet.add(currentLetter);
                    return newSet;
                });

                if (!word.includes(currentLetter)) {
                    setIncorrectGuesses((prev: number) => prev + 1);
                }

                setCurrentLetter("");
            }
            else if (e.key === "Backspace") {
                setCurrentLetter("");
                setErrorMessage("Please enter a letter");
            }
            else if (currentLetter === "") {
                setCurrentLetter("");
                setErrorMessage("Please enter a letter");
            }
        }

        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydown", keydown);
        };
    }, [currentLetter]);

    return (
        <div className="user-input">
            {currentLetter ? <div className="current-letter">{currentLetter || "\u00A0"}</div> : <div className="error">{errorMessage}</div>}
            <div className="instructions">Press Enter to Submit Guess</div>
        </div>
    )
}