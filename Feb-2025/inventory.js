
function printEachFruitNameAndQuantity (Object){
    let result = "";
    for (Key, Value in ObjectEntries(Object)){
        result += `${Key} : ${Value} `;
    return result;
    }
}

function totalNumberOfFruits(Object){
    let sum = 0;
    for (Key, Value in ObjectEntries(Object)){
        sum += Value;
    }
    return sum;
}


module.exports = {printEachFruitNameAndQuantity, totalNumberOfFruits}