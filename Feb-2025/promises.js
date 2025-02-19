const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });

    
const anotherPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  anotherPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].name);
    })
  

  const newPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  newPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
      console.log(data[0].price);
      console.log(data);
    });
  });

  const morePromises = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"); 
  

    morePromises.then((response) => {
        if(!response.ok){
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })

    const failedPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    failedPromise
    .then((response) => {
        if(!response.ok){
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.log(error);
    })  
    