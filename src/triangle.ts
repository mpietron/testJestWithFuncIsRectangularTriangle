// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego "

export const isRectangularTriangle = (x1: number, x2: number, x3: number): boolean => {

  const [a, b, c]: number[] = [x1, x2, x3].sort((_a, _b) => _a - _b);
  const areAnyNumbersLessAndGreaterThan0 = a <= 0;
  if (areAnyNumbersLessAndGreaterThan0) throw new Error(`all numbers must be greater than 0`);

  // const triangleCanBeBuild = a + b > c;
  if (a + b <= c) {
    throw new Error('is wrong args')
  }
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ? true : false;

};


// test:
//wywalic true jesli jest ok
// wywali false jest nie jest ok
// wywalic error jesli nie przejdzie
//sprawdzic czy przejda ponizej 0 cyfry
//sprawdzic czy jak dam parametr 3,4,6 zbuduje trojkat i wywali err

console.log(isRectangularTriangle(3, 2, 1))
// console.log(isRectangularTriangle(1, 2, 3))

// console.log(isRectangularTriangle(3, 5, 1))

// console.log(isRectangularTriangle(3, 8, 1))
// console.log(isRectangularTriangle(11, 1, 3))
// console.log(isRectangularTriangle(-2, -3, -4))
// console.log(isRectangularTriangle(-5, -7, -9))
