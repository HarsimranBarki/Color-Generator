var colorOne = document.getElementById("colorOne");
var colorTwo = document.getElementById("colorTwo");
var currentColor = document.getElementById("current-color");
var body = document.getElementById("back");

function setGradient() {
    body.style.backgroundImage = `linear-gradient(to right bottom,${colorOne.value},${colorTwo.value})`;
    currentColor.textContent = body.style.backgroundImage + ";";
}

colorOne.addEventListener('input', setGradient);

colorTwo.addEventListener('input', setGradient);
