import { useNavigate } from "react-router-dom";

export function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <span className="title">Welcome to Word Guesser!</span>
            <div className="description">
                Guess the word by selecting letters. Type a letter and press enter to submit. Try to guess the word without making more that 6 incorrect guesses!
            </div>
            <div className="instructions">
                Choose a difficulty level:
            </div>
            <button className="button" onClick={() => navigate("/game", {state: 4})}>Easy</button>
            <button className="button" onClick={() => navigate("/game", {state: 7})}>Hard</button>
        </div>
    )
}