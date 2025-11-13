
const url = "https://fakestoreapi.com/products";

export async function fetchProducts() {
  try{
    const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Kunde inte hämta data.");
  }
  return await response.json();

  }catch(error){
   console.error("API Error:", error);
   throw error;  }
}
