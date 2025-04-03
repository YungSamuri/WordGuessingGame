export async function getWord(): Promise<string[]> {
    const length: number = Math.floor(Math.random() * 7) + 4;
    const reponse = await fetch(`https://random-word-api.herokuapp.com/word?length=${length}`);
    const data = await reponse.json();
    return data[0].split("");
}