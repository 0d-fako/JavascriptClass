async function fetchProducts(){
    try {
    const response = await fetch ("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    if(!response.ok){
        throw new Error (`HTTP error: ${response.status}`)
    }
    const data = await response.json();
    console.log(data[0].name);
    } catch (error) {
        console.error(`Could not get products: ${error}`)
    }
} 

fetchProducts();