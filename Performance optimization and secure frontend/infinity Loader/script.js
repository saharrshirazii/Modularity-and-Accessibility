
const lastImage = document.querySelectorAll("img.last")[0];
const imagesDiv = document.getElementById("imagesDiv");

const observer = new IntersectionObserver((entries, observerInstance) => {
	entries.forEach((entry) => {

		console.log("Last image: " + entry.isIntersecting);

		if (entry.isIntersecting == true) {
			for (let i = 0; i < 5; i++) {
				let img = document.createElement("img");
				img.src = "https://picsum.photos/200/300?rnd=" + i;
				imagesDiv.appendChild(img);
			}
		}


	});
});

observer.observe(lastImage);
