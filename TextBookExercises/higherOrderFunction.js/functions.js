function range (start , end){
    let array = [];

    for (let i = start; i <= end; i++){
        array.push(i)
    }
    return array;
}


function sum(array){
    return array.reduce((total, num) => total + num, 0);
}


console.log(sum(range(1,10)))
