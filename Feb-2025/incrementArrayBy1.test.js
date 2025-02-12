const {incrementArrayBy1, incrementArrayByOne,addIndexToEachElement,getOddNumbers,getWordsGreaterThan4,getAgeGreaterThan20 } = require('./incrementArrayBy1.js');


test('Increment Array by 1', () => {
    let result = incrementArrayBy1([1,2,3,4,5]);
    let answer = [1,2,3,4,6];
    expect(result).toEqual(answer);
})

test('Increment Array by 1', () => {
    let result = incrementArrayByOne([1,2,9]);
    let answer = [1,3,0];
    expect(result).toEqual(answer);
})

test('Add index to each element', () => { 
    let result = addIndexToEachElement([1,2,3,4,5]);
    let answer = [1,3,5,7,9];
    expect(result).toEqual(answer);
})

test('Get odd numbers', () => {
    let result = getOddNumbers([1,2,3,4,5,6,7]);
    let answer = [1,3,5,7];
    expect(result).toEqual(answer);
})

test('Get words greater than 4', () => {
    let result = getWordsGreaterThan4(["hello", "world", "this", "is", "a", "test"]);
    let answer = ["hello", "world"];
    expect(result).toEqual(answer);
})


test('get age greater than 20', () =>  {
    let arrayOfPeopleObject = [{name: "John", age: 25}, {name: "Jane", age: 19}, {name: "Doe", age: 30}]
    let result = getAgeGreaterThan20(arrayOfPeopleObject);
    let answer = [{name: "John", age: 25}, {name: "Doe", age: 30}];
    expect(result).toStrictEqual(answer);
})