let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let random = document.querySelector('button');


function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;

    css.textContent = body.style.background + ";"
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function setRandomColor() {
    let r = getRandomValue(0,255);
    let g = getRandomValue(0,255);
    let b = getRandomValue(0,255);
    let rgb = `rgb(${r},${g}, ${b})`

   return rgb
}

function setRandomGradient() {
    
    body.style.background = `linear-gradient(to right, ${setRandomColor()}, ${setRandomColor()})`;

    css.textContent = body.style.background + ";"
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click', setRandomGradient);