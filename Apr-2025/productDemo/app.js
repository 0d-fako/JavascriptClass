const PRODUCT_URL = "https://fakestoreapi.com/products";

const productsContainer = document.querySelector(".productsWrapper");

console.log(productsContainer);

// const getProducts = (url)=>{
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {console.log(data)})
//     .catch((error) => console.log(error))
// };



const getProducts = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayProducts(data);
    
    } catch(error){
        console.log(error);
    }
}


getProducts(PRODUCT_URL);


function displayProducts(products){
    products.forEach((product) => {
        
        // productsContainer.innerHTML = '';
        
        const {title, price, description, image} = product;
        console.log(title, price, description, image);

        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        
        
        const nairaPrice = price * 1500;
        
        
        productElement.innerHTML = `
            <img src="${image}" alt="${title}">
            <h3 class="productName">${title}</h3>
            <p class="productDescription">${description.substring(0, 100)}...</p>
            <p class="productPrice">&#8358; ${nairaPrice.toFixed(2)}</p>
            <button class="addToCartButton">Add to Cart</button>
        `;
        
    
        productsContainer.appendChild(productElement);
    })



}