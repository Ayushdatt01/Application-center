let css = document.querySelector("h3");
let css2 = document.querySelector(".properties");
let button = document.querySelector(".color1");
let button2 = document.querySelector(".color2");
let body = document.getElementById("body");
let randomButton = document.querySelector(".random");


body.onload = function () {
	body.style.background = "linear-gradient(to right, " + button.value + ", " + button2.value + ")";
	css.textContent = body.style.background + ";";
}

process = () => {
	body.style.background = "linear-gradient(to right, " + button.value + ", " + button2.value + ")";
	css.textContent = body.style.background + ";";
}


random = () => {

	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let a = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let c = Math.floor(Math.random() * 256);



	let gradient1 = "rgb(" + x + ", " + y + ", " + z + ")";
	let gradient2 = "rgb(" + a + ", " + b + ", " + c + ")";

	body.style.background = "linear-gradient(to right, " + gradient1 + ", " + gradient2 + ")";
	css2.textContent = body.style.background + ";";

}



button.addEventListener("input", process);

button2.addEventListener("input", process);

randomButton.addEventListener("click", random);

