import { ILetterList } from "../types";

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

export function oranizeLettersByFrequency(phrase: string): ILetterList {
  const letters: ILetterList = {};
  for (let i = 0; i < phrase.length; i++) {
    const letter = phrase[i];
    if (!letters[letter]) {
      letters[letter] = 1;
      continue;
    }
    letters[letter]++;
  }
  return letters;
}

export function groupLetterListByFrequency(
  letterList: ILetterList
): { [key: number]: string[] } {
  return Object.entries(letterList).reduce(
    (acc: { [key: number]: string[] }, [letter, frequency]) => {
      const updatedAcc = {
        ...acc,
      };
      if (acc[frequency]) {
        acc[frequency].push(letter);
        return acc;
      }
      updatedAcc[frequency] = [letter];
      return updatedAcc;
    },
    {}
  );
}
