const observeBtn1 = document.getElementById('observe1');
const observeBtn2 = document.getElementById('observe2');
const unobserveBtn1 = document.getElementById('unobserve1');
const unobserveBtn2 = document.getElementById('unobserve2');
const disconnect = document.getElementById('disconnect');
const textArea1 = document.getElementById('textarea1');
const textArea2 = document.getElementById('textarea2');

// resize observer object
const observer = new ResizeObserver ((entries, ob) => {
    console.log(entries);
});

observeBtn1.addEventListener('click', ()=>{
    observer.observe(textArea1);
});

observeBtn2.addEventListener('click', ()=>{
    observer.observe(textArea2);
});

unobserveBtn1.addEventListener('click', ()=>{
    observer.unobserve(textArea1);
});

unobserveBtn2.addEventListener('click', ()=>{
    observer.unobserve(textArea2);
});


disconnect.addEventListener('click', ()=>{
    observer.disconnect();
});