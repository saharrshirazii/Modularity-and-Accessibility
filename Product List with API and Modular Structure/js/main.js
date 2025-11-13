import { fetchProducts } from "./apiService.js";
import { showProducts, showLoading, showError } from "./uiComponent.js";
// import { showProductDetails } from "./uiComponent.js"; 


async function initialize() {
  try {

    showLoading(); 
    const products = await fetchProducts();
    showProducts(products);
  } catch (error) {
    console.error("Error:", error);
    showError("Could not load products. Please try again later.");

  }
}

initialize();