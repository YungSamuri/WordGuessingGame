import { useNavigate } from "react-router-dom";

export function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <span className="title">Welcome to Word Guesser!</span>
            <button className="button" onClick={() => navigate("/game")}>Start Game</button>
        </div>
    )
}