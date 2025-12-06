const observBtn = document.getElementById("observe");
const unobservBtn = document.getElementById("unobserve");

const container = document.getElementById("container");
const title = document.getElementById("title");
const text = document.getElementById("text");
const slider = document.getElementById("slider");

const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    // console.log(entry.borderBoxSize);
    // console.log(entry.contentBoxSize);
    const width = entry.borderBoxSize[0].inlineSize;
    const factor = (width - 600) / 28;
    console.log(factor);

    if (width > 600) {
        title.style.fontSize = factor * 1.5 + 32 + "px";
        text.style.fontSize = factor + 20 + "px";
    }else {
         title.style.fontSize = "32px";
        text.style.fontSize = "20px";
    }
});

observBtn.addEventListener('click', () => {
    observer.observe(container);
});

unobservBtn.addEventListener('click', () => {
    observer.unobserve(container);
});

slider.addEventListener('input', () => {
    const value = slider.value;
    container.style.width = value + "px";
});