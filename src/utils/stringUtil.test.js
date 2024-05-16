import { forceCap } from "./stringUtils";

describe("forceCap", () => {
  it("should return an empty string if provided an empty string", () => {
    expect(forceCap("")).toBe("");
  });

  it("should capitalize the first character of a string", () => {
    expect(forceCap("hello")).toBe("Hello");
  });

  it("should not alter the case of other characters in the string", () => {
    expect(forceCap("hello")).toBe("Hello");
    expect(forceCap("goodbye")).toBe("Goodbye");
  });

  it("should handle strings that already start with an uppercase letter", () => {
    expect(forceCap("Hello")).toBe("Hello");
  });

  it("should handle single-character strings correctly", () => {
    expect(forceCap("h")).toBe("H");
    expect(forceCap("H")).toBe("H");
  });

  it("should handle strings with leading spaces", () => {
    expect(forceCap(" hello")).toBe(" hello");
  });
});
