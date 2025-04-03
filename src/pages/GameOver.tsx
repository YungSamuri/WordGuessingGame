import { useLocation, useNavigate } from "react-router-dom";

export function GameOver() {
    const navigate = useNavigate();
    const location = useLocation();
    const guessesLeft = location.state as number;

    return (
        <div className="content">
            <span className="title">{guessesLeft > 0 ? "You Win!" : "Game Over"}</span>
            <button className="button" onClick={() => navigate("/game")}>Play Again</button>
        </div>
    )
}