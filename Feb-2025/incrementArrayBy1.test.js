const {incrementArrayBy1, incrementArrayByOne } = require('./incrementArrayBy1.js');


test('Increment Array by 1', () => {
    let result = incrementArrayBy1([1,2,3,4,5]);
    let answer = [1,2,3,4,6];
    expect(result).toEqual(answer);
})

test('Increment Array by 1', () => {
    let result = incrementArrayByOne([1,2,3,4,9]);
    let answer = [1,2,3,5,0];
    expect(result).toEqual(answer);
})