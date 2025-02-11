const inventory ={
    apple : 10,
    banana : 2,
    orange : 8,
    mango :10

}


function printEachFruitNameAndQuantity (inventory){
    for (Key, Value in ObjectEntries(inventory)){
        return `${Key} :${Value}`;
    }
}


function totalNumberOfFruits(inventory){
    total = 0;
    for (key, value in ObjectEntries(inventory))total += value;
    return total
}