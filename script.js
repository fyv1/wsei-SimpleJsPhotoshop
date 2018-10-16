let img;
let imgUrl = "vader.png";

let cv = document.querySelector("#cv")

let context;

context = cv.getContext('2d');
img = new Image();
img.src = imgUrl;

img.addEventListener('load', function(e) {
    context.drawImage(img,0,0);

    let imgData =  context.getImageData(0, 0, cv.width, cv.height);

    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i+1] = 255 - imgData.data[i+1];
        imgData.data[i+2] = 255 - imgData.data[i+2];
        imgData.data[i+3] = 255;
    }
context.putImageData(imgData, 0, 0);
}
);


/*
let cValue = document.querySelector("#cValue");
let bValue = document.querySelector("#bValue");
let sValue = document.querySelector("#sValue");

let cContrast = document.querySelector("#contrast");
cValue.innerHTML = cContrast.value;

let cBrightness = document.querySelector("#brightness");
bValue.innerHTML = cBrightness.value;

let cSaturation = document.querySelector("#saturation");
sValue.innerHTML = cSaturation.value;

cContrast.oninput = function() { cValue.innerHTML = this.value; }
cBrightness.oninput = function() { bValue.innerHTML = this.value; }
cSaturation.oninput = function() { sValue.innerHTML = this.value; } 

*/