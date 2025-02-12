const input = [3,4,3]
const output = [3,4,4]


function incrementArrayBy1(input){
    let output = [];
    let carry = 1;
    for(let i = input.length-1; i>=0; i--){
        let sum = input[i] + carry;
        if(sum > 9){
            carry = 1;
            output.unshift(0);
        }else{
            carry = 0;
            output.unshift(sum);
        }
    }
    if(carry === 1){
        output.unshift(1);
    }
    return output;
}


console.log(incrementArrayBy1([9,8,9]));



function incrementArrayByOne(input){
    let arrayString = parseInt(input.join(""));
    let incremented = arrayString + 1;
    let incrementedArray = incremented.toString().split("");
    return incrementedArray.map(Number);
}


function addIndexToEachElement(input){
    return input.map((element, index) => element + index);
}


function getOddNumbers(input){
    return input.filter(element => element % 2 !== 0);
}


const getWordsGreaterThan4 = (input) => {
    return input.filter(word => word.length > 4);
}

const getAgeGreaterThan20 = (input) => {
    return input.filter(person => person.age > 20);
}

module.exports = { incrementArrayBy1, incrementArrayByOne, addIndexToEachElement, getOddNumbers, getWordsGreaterThan4, getAgeGreaterThan20};