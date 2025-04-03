import { useEffect, useState } from "react";

export function UserInput(props: any) {
    const { setGuessedLetters, setIncorrectGuesses, word } = props;
    const [currentLetter, setCurrentLetter] = useState("");
    const [validLetter, setValidLetter] = useState(true);

    useEffect(() => {
        function keydown(e: KeyboardEvent) {
            if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
                setCurrentLetter(e.key.toLowerCase());
                setValidLetter(true);
            } 
            else if (e.key === "Enter") {
                if (currentLetter === "") {
                    setValidLetter(false);
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
                setValidLetter(true);
            }
            else {
                setCurrentLetter("");
                setValidLetter(false);
            }
        }

        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydown", keydown);
        };
    });

    return (
        <div className="user-input">
            {validLetter ? <div className="current-letter">{currentLetter || "\u00A0"}</div> : <div className="error">Please enter a letter</div>}
            <div className="instructions">Press Enter to Submit Guess</div>
        </div>
    )
}