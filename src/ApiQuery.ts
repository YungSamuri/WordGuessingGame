export async function getWord(difficultyOffset: number): Promise<string[]> {
    const length: number = Math.floor(Math.random() * 3) + difficultyOffset;
    const reponse = await fetch(`https://random-word-api.herokuapp.com/word?length=${length}`);
    const data = await reponse.json();
    return data[0].split("");
}