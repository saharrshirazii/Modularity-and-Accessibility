import { createButton } from "./components/button.js";

// button - Hello World
const btnHello = createButton("Hello World", () => {
  alert("Hello World!");
});

//button - change the bg color
const btnBackgroundColor = createButton("Change Color", ()=>{
 document.body.style.backgroundColor = "lightblue";
});

//button - change the bg color
const btnWriteConsole = createButton("Write to Console", ()=>{
 console.log("you clicked on me");
});



document.body.appendChild(btnHello);
document.body.appendChild(btnBackgroundColor);
document.body.appendChild(btnWriteConsole);



