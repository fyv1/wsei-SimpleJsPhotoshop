let img;
let imgUrl;

let display = document.querySelector("#demo");

let cv = document.querySelector("#cv");

let cContrast = document.querySelector("#contrast");
display.innerHTML = cContrast.value;

cContrast.oninput = function() { display.innerHTML = this.value; }



img = document.createElement('img');
img.src = imgUrl;
img.addEventListener('load', function(e) {
    
});