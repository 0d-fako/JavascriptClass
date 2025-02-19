input = [4,12,8]
output = [2,2]

input = [6,9,5]
output = [3]

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



console.log(getHighestCommonFactor([4,12,8])) 
console.log(getHighestCommonFactor([6,9,15])) 

module.exports = getHighestCommonFactor;