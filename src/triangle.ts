class CustomError extends Error {
  constructor(m: string) {
    super(m);
    Error.captureStackTrace(this, this.constructor);
  }
}

/** 

Mieszanie wyjątków z innymi typami to antywzorzec!!! 
Funkcja musi wtedy zwracać konkretny typ lub never
 
*/
const isRectangularTriangle = (
  _a: number,
  _b: number,
  _c: number
): boolean | never => {
  const [a, b, c]: number[] = [_a, _b, _c].sort((a, b) => a - b);
  if (a <= 0) {
    throw new CustomError("Line segments must be greater than 0");
  } else if (a + b <= c) {
    throw new CustomError("Can't build a triangle from the indicated sections");
  } else {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ? true : false;
  }
};

export { isRectangularTriangle, CustomError };
