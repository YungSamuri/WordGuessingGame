export function Guesses(props: any) {
    const { incorrectGuesses } = props;
    return (
        <div className="incorrect-guesses">
            <h2 className="header">Incorrect Guesses ({incorrectGuesses.length}/7) :</h2>
            <div className="guess-container">
                {incorrectGuesses.map((letter: string, index: number) => (
                    <span key={index} className="guess">{letter}</span>
                ))}
            </div>
        </div>
    )
}