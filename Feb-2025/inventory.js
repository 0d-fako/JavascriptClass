function printEachFruitNameAndQuantity(object) {
    let result = "";
    for (const [key, value] of Object.entries(object)) {
        result += `${key}: ${value} `;
    }
    return result;
}

function totalNumberOfFruits(object) {
    let sum = 0;
    for (const value of Object.values(object)) {
        sum += value;
    }
    return sum;
}

module.exports = { printEachFruitNameAndQuantity, totalNumberOfFruits };
