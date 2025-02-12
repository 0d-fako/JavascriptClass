const { findScoreGreaterThan70, increaseScoreBy5, getSquaredScores } = require('./higherOrderFunction.js');

test('Find score greater than 70', () => {
    let result = findScoreGreaterThan70([90, 85, 78, 99, 100, 88, 78, 95, 89, 90]);
    let answer = [90, 85, 78, 99, 100, 88, 78, 95, 89, 90];
    expect(result).toEqual(answer);
})

test('Increase score by 5', () => {
    let result = increaseScoreBy5([90, 85, 78, 99, 100, 88, 78, 95, 89, 90]);
    let answer = [95, 90, 83, 104, 105, 93, 83, 100, 94, 95];
    expect(result).toEqual(answer);
})

test('Get sqaured scores', () => {
    let result = getSquaredScores([9, 8, 7, 9, 10, 8, 7]);
    let answer = [81, 64, 49, 81, 100, 64, 49];
    expect(result).toEqual(answer);
})