const {incrementArrayBy1} = require('./incrementArrayBy1.js');



test('Increment Array by 1', () => {
    let result = incrementArrayBy1([1,2,3,4,5]);
    let answer = [2,3,4,5,6];
    expect(result).toEqual(answer);
})