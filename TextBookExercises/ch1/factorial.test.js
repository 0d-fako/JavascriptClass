const factorial = require('./factorial.js');


test('Test factorial', () => {
    let result = factorial(5);
    let answer = 120;
    expect(result).toBe(answer);
})  