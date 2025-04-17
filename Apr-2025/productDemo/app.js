const PRODUCT_URL = "https://fakestoreapi.com/products";

const productsContainer = document.querySelector(".products");

console.log(productsContainer);

const getProducts = (url)=>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => {console.log(data)})
    .catch((error) => console.log(error))
};



getProducts(PRODUCT_URL);


function displayProducts(products){

}