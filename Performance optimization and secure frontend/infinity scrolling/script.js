const container = document.querySelector("#container");
 let page = 1;

 const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting) {
        addBoxes();
  }}, {
    rootMargin: "50px",
   });

function observeLast(){
    observer.disconnect();
    const boxes = document.querySelectorAll(".box");
    observer.observe(boxes[boxes.length - 1]);
}

observeLast();

function addBoxes() {
    page++;
    if (page > 5) {
        observer.disconnect();
        return;
    }else{
        const lastId = container.childElementCount;
        for (let i = 1; i <= 10; i++) {
            const box = document.createElement("div");
            box.className = "box";
            box.textContent = `box ${lastId + i}`;
            container.appendChild(box);
        }
        observeLast();
    }  
    }     
