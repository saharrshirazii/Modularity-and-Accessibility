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
    console.log("clicked on:", product.title);
    });

    productList.appendChild(card);

});


 
}

export function ProductDetails(products) {
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



// export function showLoading() {
//     const productList = document.querySelector("#productList");
//     const p = document.createElement("p");
//     p.className = "loading";
//     p.textContent = "Something is loading ...";
//     productList.appendChild(p);

// }

// export function hideLoading() {
//     const productList = document.querySelector("#productList");
//     const loading = productList.querySelector(".loading");
//     if (loading) loading.remove();
// }
// export function showError(message) {
//     const productList = document.querySelector("#productList");
//     productList.innerHTML = `<p class="error">${message}</p>`;
// }

// export function showProducts(){

// }

// export function showProductDetails(){

// }