import { convertStringToBinary } from "../string";

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
});

export {};
