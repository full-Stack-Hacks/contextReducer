import { describe, expect, it } from "vitest";
import { getRandomWord } from "./arrayUtils";

describe("getRandomWord", () => {
  it("returns a value that is in the array", () => {
    const array = ["apple", "banana", "cherry"];
    const word = getRandomWord(array);
    expect(array).toContain(word);
  });

  it("returns undefined when the array is empty", () => {
    expect(getRandomWord([])).toBeUndefined();
  });

  it("returns the only item when the array has one item", () => {
    const array = ["only"];
    expect(getRandomWord(array)).toBe("only");
  });

  // Optional: Test for randomness distribution
  // This test checks if the function can potentially return all items in an array
  // given a large enough sample size. This is not a strict statistical test.
  it("should potentially return all items given enough calls", () => {
    const array = ["apple", "banana", "cherry"];
    const results = new Set();
    for (let i = 0; i < 1000; i++) {
      results.add(getRandomWord(array));
    }
    expect(results.size).toBe(array.length);
  });
});
