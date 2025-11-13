import { fetchProducts } from "./apiService.js";
import { showProducts } from "./uiComponent.js";
// import { showProductDetails } from "./uiComponent.js"; 


async function init() {
  try {
    const products = await fetchProducts();
    showProducts(products);
  } catch (error) {
    console.error("Error:", error);
  }
}

init();