 //products
 export function showProducts(products) {
 const productList = document.getElementById("productList");
 productList.innerHTML= "";

 products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = 
    `<img src = "${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p class = "price">${product.price}</p>`;
 

    card.addEventListener("click", ()=>{
    
    ProductDetails(product);
    // hideDetails(product);

    });

    productList.appendChild(card);

});
 
}
//products detalis 
export function ProductDetails(product) {
    const modal = document.getElementById("productModal");
    modal.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Description:</strong> ${product.description}</p>
    `;
      modal.scrollIntoView({ behavior: "smooth" });

}

// export function hideDetails(product){
//   const productList = document.querySelector("#productList");
//   productList.innerHTML = ""; 
// }



export function showLoading() {
    const productList = document.querySelector("#productList");
    const p = document.createElement("p");
    p.className = "loading";
    p.textContent = "loading ...";
    productList.appendChild(p);

}



export function showError(message) {
    const productList = document.querySelector("#productList");
     productList.innerHTML = "";
     const p = document.createElement("p");
     p.className = "error-message";
     p.textContent = message;
     productList.appendChild(p);

}

