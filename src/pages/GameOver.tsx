import { useLocation, useNavigate } from "react-router-dom";

export function GameOver() {
    const navigate = useNavigate();
    const location = useLocation();
    const { guessesLeft, word } = location.state;

    return (
        <div className="content">
            <span className="title">{guessesLeft > 0 ? "You Win!" : "Game Over"}</span>
            <div className="description">
                {guessesLeft > 0 ? `You guessed the word "${word.join("")}" with ${guessesLeft} guesses left!` : `The word was "${word.join("")}". Better luck next time!`}
            </div>
            <div className="instructions">
                Play again?
            </div>
            <button className="button" onClick={() => navigate("/game", {state: 4})}>Easy</button>
            <button className="button" onClick={() => navigate("/game", {state: 7})}>Hard</button>
        </div>
    )
}