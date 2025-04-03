export function GameOver() {
    return (
        <div className="game-over">
            <h1>Game Over</h1>
            <p>Thanks for playing!</p>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
    )
}