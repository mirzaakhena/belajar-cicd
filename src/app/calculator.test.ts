import { calculator } from "./calculator";

describe("calculator", () => {
  it("should add two numbers", () => {
    expect(calculator(2, 3)).toBe(5);
  });
});
