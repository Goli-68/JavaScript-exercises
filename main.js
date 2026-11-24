
console.log("Script loaded");

const products = getAvailableProducts();

console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {

  
  const productList = document.querySelector("#products");

 
  products.forEach(function(product) {

   
    const li = document.createElement("li");

    // Add product information
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price} kr</p>
      <p>Rating: ${product.rating}/10</p>
    `;

    
    productList.appendChild(li);

  });
}


renderProducts(products);
