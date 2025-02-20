function range (start , end){
    let array = [];

    for (let i = start; i <= end; i++){
        array.push(i)
    }
    return array;
}

console.log(range(1,10))

function sum(array){
    return array.reduce((total, num) => total + num);
}


console.log(sum(range(1,10)))


function stringWithLongestLength(array){ 
    let longest = "";
    for(let i = 0; i< array.length; i++){
        if (array[i].length > longest.length){
            longest = array[i];
        }
    }   
    return longest;
}


console.log(stringWithLongestLength(["apple", "banana", "orange", "kiwi"]))


// let total = 0, count = 0;
// for (let script of SCRIPTS){
//      if(script.living){
//         total += script.year;
//         count++;
//      }
// }

// console.log(Math.round(total/count))



function stringContainsOnlyBinary(string){
    for(let char of string){
        if(char !== "0" && char !== "1"){
            return false;
        }
    }
    return true;
}

function convertStringToNumbersArray(string){
    if (!stringContainsOnlyBinary(string)){
        return "Invalid input"; 
    
    }
    return string.split("").map(char => parseInt(char));
}

console.log(stringContainsOnlyBinary("1110101"))
console.log(stringContainsOnlyBinary("11101012"))

console.log(convertStringToNumbersArray("1110101"))
console.log(convertStringToNumbersArray("11101012"))


function flattenArrays(array){
    return array.reduce((total, current) => total.concat(current), []);
}

console.log(flattenArrays([[1,2,3], [4,5,6], [7,8,9]]))

function getUniqueValues(array){
    return [...new Set(array)];
}

console.log(getUniqueValues([1,2,3,4,5,5,6,7,8,9,9,10]))

function myOwnLoop(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
        body(i);
    }
}