const [getHighestCommonFactor, primeCommonFactors] = require('./ArrayKata.js');

test('Get highest common factor', () => {
    let result = getHighestCommonFactor([4,12,8]);
    let answer = [2,2];
    expect(result).toEqual(answer);
})

test('Get highest common factor', () => {
    let result = getHighestCommonFactor([6,9,15]);
    let answer = [3];
    expect(result).toEqual(answer);
})  

