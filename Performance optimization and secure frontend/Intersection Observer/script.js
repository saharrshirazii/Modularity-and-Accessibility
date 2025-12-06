const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');

const observer1 = new IntersectionObserver((entries, obj) => {
    console.log(entries);
}, {
    rootMargin: "100px",
    // threshold: "0.5",
    threshold: [0.25, 0.5, 0.75, 1]

});

observer1.observe(outerDiv);


const observer2 = new IntersectionObserver((entries) => {
    console.log(entries);
}, {
    root: outer,
    rootMargin: "50px",
    threshold: 0.5
});
observer2.observe(innerDiv);