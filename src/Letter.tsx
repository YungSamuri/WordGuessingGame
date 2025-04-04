export function Letter (props: { letter: string, guessed: boolean }) {
    const { letter, guessed } = props;
    return (
        <span className={guessed ? "guessed" : ""}>{guessed ? letter : "\u00A0"}</span>
    )
}