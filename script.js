let pixelsLength = 5;

//Criar um quadro de pixels
function createPixels() {
  let pixelBoard = document.getElementById("pixel-board");
    for (var i = 0; i < pixelsLength; i+= 1) {
        let line = document.createElement("tr")
        line.className = "line"
        pixelBoard.appendChild(line)
        }
    for (var j = 0; j < pixelsLength; j+= 1) {
        for (var i = 0; i < pixelsLength; i+= 1) {
            let pixelLine = document.getElementsByClassName("line")[j];
            let pixel = document.createElement("td");
            pixel.className = "pixel";
            pixelLine.appendChild(pixel)
        }
    }
}

createPixels()

//Definir a cor selecionada
function selectColor(){
    let colorPalette = document.getElementById("color-pallete")
    colorPalette.addEventListener("click", function(event) {
        event.target.className = "color selected"
    })
}

selectColor()