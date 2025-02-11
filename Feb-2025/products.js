
const products = [
{ id: 1, name: "Laptop", price: 1200 },
{ id: 2, name: "Phone", price: 800 },
{ id: 3, name: "Tablet", price: 500 },
{ id: 4, name: "Desktop", price: 700 }
];

const threshold = 700;

function findExpensiveProducts(products, threshold) {
    return products.filter(product => product.price > threshold);
}

module.exports = { findExpensiveProducts };