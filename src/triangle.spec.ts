import {
    isRectangularTriangle
} from './triangle';

// it('numbers are more than 0', () => {
//     expect(isRectangularTriangle(3, 4, 5)).toBe(true)
// })


// describe('function rectangular triangle', () => {
//     const correctNumbers = [[3, 4, 5], [5, 4, 3], [4, 3, 5], [4, 5, 3], [5, 12, 13], [13, 12, 5], [12, 13, 5], [12, 5, 13]];

//     test.each(correctNumbers)('numbers are correct', (x1, x2, x3) => {
//         expect(isRectangularTriangle(x1, x2, x3)).toBe(true);
//     })

//     const wrongNumbers = [[5, 7, 9], [9, 7, 5], [7, 5, 9], [9, 5, 7], [9, 16, 25], [25, 16, 9], [16, 9, 25], [25, 9, 16]];

//     test('type error', () => {
//         expect(isRectangularTriangle).toThrow(`can't build rectangular triangle`)
//     })

//     test.each(wrongNumbers)('numbers are wrong and throw error', (a, b, c,) => {
//         expect(() => { isRectangularTriangle(a, b, c) }).toThrow(`can't build rectangular triangle`);
//     })
// });


describe('function rectangular works correctly', () => {
    const correctNumbers = [[3, 4, 5], [5, 4, 3], [4, 3, 5], [4, 5, 3], [5, 12, 13], [13, 12, 5], [12, 13, 5], [12, 5, 13]];

    test.each(correctNumbers)('po przekazaniu numerów które tworzą trójkąt prostokątny zwraca true', (x1, x2, x3) => {
        expect(isRectangularTriangle(x1, x2, x3)).toBe(true);
    });

    const wrongNumbers = [[5, 7, 9], [9, 7, 5], [7, 5, 9], [9, 5, 7], [9, 16, 25], [25, 16, 9], [16, 9, 25], [25, 9, 16]];

    test.each(wrongNumbers)('po przekazaniu do funkcji numerów które tworzą trójkąt nieprostkątny zwraca false', (x1, x2, x3) => {
        expect(isRectangularTriangle(x1, x2, x3)).toBe(false);
    });

})

describe('function rectangular correctly handles error', () => {
    const negativeNumber2 = [[1, 2, 3], [3, 2, 1]]

    // negativeNumber2.forEach(([x1, x2, x3]) => {
    // expect(isRectangularTriangle(x1, x2, x3)).toBe(false);
    // })

    negativeNumber2.forEach(([x1, x2, x3]) => {
        expect(() => { isRectangularTriangle(x1, x2, x3) }).toThrow('is wrong args')
    })
});
