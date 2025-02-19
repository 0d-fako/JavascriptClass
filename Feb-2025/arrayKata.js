

function factorize(num) {
    let factors = [];
    let divisor = 2;
    while (num >= 2) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

function getHighestCommonFactor(input){
    let min = Math.min(...input)
    let hcf = 1
    for(let i = 2; i <= min; i++){
        if(input.every(num => num % i === 0)){
            hcf = i
        }
    }
    return factorize(hcf);
}


function primeCommonFactors(array) {
    let result = [];
    let isDivisible;
    let divisor = 2;

    while (divisor <= Math.min(...array)) {
        isDivisible = array.every(element => element % divisor === 0);

        if (isDivisible) {
            result.push(divisor);
            array = array.map(element => element / divisor);
        } else {
            divisor++;
        }
    }

    return result;
}




console.log(getHighestCommonFactor([4,12,8])) 
console.log(getHighestCommonFactor([6,9,15])) 


console.log(primeCommonFactors([4,12,8])) 
console.log(primeCommonFactors([6,9,15]))
module.exports = [getHighestCommonFactor, primeCommonFactors];