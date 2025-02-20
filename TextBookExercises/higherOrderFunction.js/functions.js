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
