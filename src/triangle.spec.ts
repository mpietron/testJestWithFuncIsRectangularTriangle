import { isRectangularTriangle } from "./triangle";

describe("Test throw errors", () => {
  let incorrectNumbers = [
    [-1, 2, 3],
    [2, -1, 3],
    [2, 3, -1],
    [-1, -2, 3],
    [1, -2, -3],
  ];

  test.each(incorrectNumbers)(
    `Line segments must be greater than 0 (a: %i, b: %i, c: %i)`,
    (a, b, c) => {
      expect(() => isRectangularTriangle(a, b, c)).toThrow(Error);
    }
  );
  incorrectNumbers = [
    [1, 2, 3],
    [2, 3, 1],
    [3, 2, 1],
  ];

  test.each(incorrectNumbers)(
    `Can't build a triangle from the indicated sections (a: %i, b: %i, c: %i)`,
    (a, b, c) => {
      expect(() => isRectangularTriangle(a, b, c)).toThrow(Error);
    }
  );
});

describe("Test triangle", () => {
  let correctNumbers = [[3, 4, 5]];
  test.each(correctNumbers)(`Test of true (a: %i, b: %i, c: %i)`, (a, b, c) => {
    expect(isRectangularTriangle(a, b, c)).toBe(true);
  });
  correctNumbers = [
    [6, 7, 8],
    [7, 8, 6],
    [8, 7, 6],
  ];
  test.each(correctNumbers)(
    `Test of false (a: %i, b: %i, c: %i)`,
    (a, b, c) => {
      expect(isRectangularTriangle(a, b, c)).toBe(false);
    }
  );
});

