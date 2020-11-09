window.onload = function() {
  let pixelInicial = document.querySelector('#black');
  pixelInicial.className = "color selected";
};

function pixelClass() {
  let pixelColor = document.querySelectorAll('.color');
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function(event) {
      let pixelSelected = document.querySelector(".color.selected");
      pixelSelected.className = "color";
      event.target.className = "color selected";
    })
  }
}
pixelClass()

function pintaPixel() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    let pixel = pixels[i];
    pixel.addEventListener('click', function(event) {
      let selected = document.querySelector('.color.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    })
  }
}
pintaPixel()

function limpaPixels() {
  let button = document.getElementById('clear-board');
  button.addEventListener('click', function() {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      let pixel = pixels[i];
      pixel.removeAttribute('style');
    }
  })
}
limpaPixels()