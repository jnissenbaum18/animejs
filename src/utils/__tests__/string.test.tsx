import {
  convertStringToBinary,
  oranizeLettersByFrequency,
  groupLetterListByFrequency,
} from "../string";

describe("string test suite", () => {
  it("converts a single word to a series of binary letter pairs", () => {
    const output = convertStringToBinary("test");
    const expected = {
      "0": { binary: "1110100", letter: "t" },
      "1": { binary: "1100101", letter: "e" },
      "2": { binary: "1110011", letter: "s" },
      "3": { binary: "1110100", letter: "t" },
    };
    expect(output).toEqual(expected);
  });
  it("converts a phrase into a series of binary letter pairs", () => {
    const output = convertStringToBinary("this is a test");
    const expected = {
      "0": { binary: "1110100", letter: "t" },
      "1": { binary: "1101000", letter: "h" },
      "10": { binary: "1110100", letter: "t" },
      "11": { binary: "1100101", letter: "e" },
      "12": { binary: "1110011", letter: "s" },
      "13": { binary: "1110100", letter: "t" },
      "2": { binary: "1101001", letter: "i" },
      "3": { binary: "1110011", letter: "s" },
      "4": { binary: "100000", letter: " " },
      "5": { binary: "1101001", letter: "i" },
      "6": { binary: "1110011", letter: "s" },
      "7": { binary: "100000", letter: " " },
      "8": { binary: "1100001", letter: "a" },
      "9": { binary: "100000", letter: " " },
    };
    expect(output).toEqual(expected);
  });
  it("creates a list of letters by frequency given a phrase", () => {
    const output = oranizeLettersByFrequency(
      "claude shannon father of information theory"
    );
    const expected = {
      " ": 5,
      a: 4,
      c: 1,
      d: 1,
      e: 3,
      f: 3,
      h: 3,
      i: 2,
      l: 1,
      m: 1,
      n: 5,
      o: 5,
      r: 3,
      s: 1,
      t: 3,
      u: 1,
      y: 1,
    };
    expect(output).toEqual(expected);
  });
  it("converts a list of letters into a list of frequencies", () => {
    const letterList = oranizeLettersByFrequency(
      "claude shannon father of information theory"
    );
    const output = groupLetterListByFrequency(letterList);
    const expected = {
      "1": ["c", "l", "u", "d", "s", "m", "y"],
      "2": ["i"],
      "3": ["e", "h", "f", "t", "r"],
      "4": ["a"],
      "5": [" ", "n", "o"],
    };
    expect(output).toEqual(expected);
  });
});

export {};
