# Modularity-and-Accessibility

# Build an Interactive Product List with API and Modular Structure

Covers:(HTML, CSS, JavaScript, DOM, event handling, API, modularity, UX/UI basics)

## Assignment Goal

As a group, you will create an interactive product list that fetches data from a public API and displays it in a user-friendly way.
The project should be divided into several modules and follow basic UX/UI principles.

## Requirements
## 1. Structure and Layout (HTML & CSS)

- Create a simple page with:

 - A headline <h1>.

 - A search field to filter products.

 - A section for product cards e.g. <div id="productList">.

- Use CSS to create a clear and consistent design (simple color scheme, spacing between cards, clear typography).

## 2. Data Fetching (JavaScript & API)

- Use a public API, for example:
https://fakestoreapi.com/products

- Fetch the products using fetch() and display at least:

 - Product name

 - Price

 - Image

- Handle errors (display a message if the API doesn’t respond).

## 3. Event Handling and Interactivity

- When the user clicks on a product card:

 - Show detailed information in a separate box or modal (e.g. description, category).

- Add a search field that filters products based on their name (using the input event).

- Use addEventListener (not onclick).

## 4. Modularity

- Split your code into at least three modules:

 - **apiService.js** – Fetches data from the API.

 - **uiComponent.js** – Creates and updates DOM elements.

 - **main.js** – Starts the application and connects everything.

## 5. UX/UI Focus

- Make sure the user understands what is happening:

 - Display “Loading...” while fetching data.

 - Clearly show an error message if something goes wrong.

 - Use sufficient contrast and readable text (WCAG basics).

 - Keep the layout simple and intuitive.

## 6. Extra / Advanced

- Add sorting (ascending/descending by price).

- Add category filters.

- Save the last used filter in localStorage.