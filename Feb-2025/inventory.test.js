const { printEachFruitNameAndQuantity, totalNumberOfFruits } = require('./inventory.js');

let fruits = {
    apple: 5,
    banana: 10,
    cherry: 15
};

test('Print Each Fruit Name and Quantity', () => {
    let result = printEachFruitNameAndQuantity(fruits);
    let answer = "apple: 5 banana: 10 cherry: 15 ";
    expect(result).toBe(answer);
});

test('Total Number of Fruits', () => {
    let result = totalNumberOfFruits(fruits);
    let answer = 30;
    expect(result).toBe(answer);
});