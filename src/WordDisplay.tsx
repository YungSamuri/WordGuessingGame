import {Letter } from "./Letter";

export function WordDisplay(props: any) {
    const { guessedLetters, word }: { guessedLetters: Set<string>; word: string[]} = props;
    return (
        <div className="word">
            {word.map((letter: string, index: number) => (
                <Letter key={index} letter={letter} guessed={guessedLetters.has(letter.toLowerCase())} />
            ))}
        </div>
    )
}