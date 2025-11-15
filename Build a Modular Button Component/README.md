# Modularity-and-Accessibility

# Build a Modular Button Component

## Assignment Goal
Understand how to create and use your own JavaScript modules and components.


## Instructions

1. Create a project folder with the following structure:

 /js
  /components
    button.js
  main.js
index.html

2. In button.js, create and export a function called
 createButton(label, onClick) that:
- Creates a `<button>` element

- Sets the button’s text to label

- Adds a click listener that runs the function onClick

- Returns the button

**Example:**

 export function createButton(label, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

3. In main.js, import the function and create three buttons:

- **“Hello World”** → shows an alert message

- **“Change Color”** → changes the background color of the page

- **“Write to Console”** → logs a message to the console

4. Add the buttons to the document.body.

5. Test that all logic works and that no JavaScript code is written directly inside index.html.


## Goals
- Practice exporting and importing modules

- Understand the advantage of reusable components

- Keep logic and structure separate



## Extra Challenge
Add a style.css file where you give all buttons a basic design,
 and import it in index.html.

