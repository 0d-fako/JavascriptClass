const {findExpensiveProducts} = require('./products.js');

const products = [
    {id: 1, name: "Laptop", price: 1200},
    {id: 2, name: "Phone", price: 800},
    {id: 3, name: "Tablet", price: 500},
    {id: 4, name: "Desktop", price: 700}
];


test('Find Expensive Products', () => {
    let result = findExpensiveProducts(products, 700);
    let answer = [
        {id: 1, name: "Laptop", price: 1200},
        {id: 2, name: "Phone", price: 800}
    ];

    expect(result).toEqual(answer);
})