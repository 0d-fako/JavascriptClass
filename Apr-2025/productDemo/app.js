const PRODUCT_URL = "https://fakestoreapi.com/products";


const getProducts = (url)=>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => {console.log(data)})
    .catch((error) => console.log(error))
};



getProducts(PRODUCT_URL);


function displayProducts(){
    
}