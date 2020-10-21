export interface IBinaryLetterPair {
  letter: string;
  binary: string;
}

export function convertStringToBinary(
  input: string
): { [key: string]: IBinaryLetterPair } {
  const letters: { [key: number]: IBinaryLetterPair } = {};

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    letters[i] = {
      letter,
      binary: letter.charCodeAt(0).toString(2),
    };
  }
  return letters;
}
