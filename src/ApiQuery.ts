export function getWord(): Promise<string[]> {
    const length: number = Math.floor(Math.random() * 7) + 4; 
    return fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then((response) => response.json())
        .then((data) => data[0].split(""));
}