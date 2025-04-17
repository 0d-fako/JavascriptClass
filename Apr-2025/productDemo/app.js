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
    } catch(error){
        console.log(error);
    }
}


getProducts(PRODUCT_URL);


function displayProducts(products){

}