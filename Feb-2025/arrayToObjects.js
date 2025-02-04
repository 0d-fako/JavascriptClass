function arrayToObjects(array){
    const convertedArrayObject = {};
    
    for(let number = 0; number < array.length; number++){
        let count = 0;
        for(let secondNumber = 0; secondNumber < array.length; secondNumber++){
            if (array[number] == array[secondNumber]) count++;
        }
        convertedArrayObject[array[number]] = count;
    }
    return convertedArrayObject;    
}

console.log(arrayToObjects([2, 2, 1, 3, 5, 5]));
