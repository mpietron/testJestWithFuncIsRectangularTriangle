import { isRectangularTriangle, CustomError } from "./triangle";

describe("Test throw errors", () => {
  test("Line segments must be greater than 0", () => {
    expect(() => isRectangularTriangle(-1, 2, 3)).toThrow(Error);
  });

  test("Can't build a triangle from the indicated sections", () => {
    expect(() => isRectangularTriangle(1, 2, 3)).toThrow(Error);
  });
});

describe("Test triangle", () => {
  test("Test of true", () => {
    expect(isRectangularTriangle(3, 4, 5)).toBe(true);
  });

  test("Test of false", () => {
    expect(isRectangularTriangle(6, 7, 8)).toBe(false);
  });
});
