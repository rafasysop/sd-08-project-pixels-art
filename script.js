/* ---------------------------- REQUISITO 01 ---------------------------- */

function addTitle() {
    const header = document.getElementsByTagName('header')[0];
    const h1 = document.createElement('h1');

    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';

    header.appendChild(h1);
}

addTitle();

/* ---------------------------- REQUISITO 02 e 03 ---------------------------- */

const colorsPallete = ['black', 'orange', 'gray', 'blue'];

const sectionPallete = document.querySelector('.main-section');
const divContainer = document.createElement('div');
divContainer.id = 'color-palette';

function addPalleteColors() {
    for (let i = 0; i < colorsPallete.length; i += 1) {
        const divPixelsColors = document.createElement('div');
        divPixelsColors.classList.add('color');
        divPixelsColors.style.backgroundColor = colorsPallete[i];
        divPixelsColors.id = colorsPallete[i];
        divContainer.appendChild(divPixelsColors);
    }
}

sectionPallete.appendChild(divContainer);

addPalleteColors();

/* ---------------------------- REQUISITO 04 e 05 ---------------------------- */

const sectionPixels = document.querySelector('#pixel-board');

function addPixels(size) {
    for (let row = 0; row < size; row += 1) {
        const boxPixel = document.createElement('div');
        boxPixel.style.backgroundColor = 'white';
        sectionPixels.appendChild(boxPixel);

        for (let col = 0; col < size; col += 1) {
            const boxPixel = document.createElement('div');
            boxPixel.style.backgroundColor = 'white';
            boxPixel.classList.add('pixel');
            sectionPixels.appendChild(boxPixel);
        }
    }
}

addPixels(5);

/* ---------------------------- REQUISITO 06 ---------------------------- */

const selectedColor = document.querySelector('#black');

function setBlackColor() {
    selectedColor.classList.add('selected');
}

setBlackColor();

/* ---------------------------- REQUISITO 07 ---------------------------- */

const colorPallete = document.querySelector('#color-palette');

colorPallete.addEventListener('click', chooseSelectedColor);

function chooseSelectedColor(event) {
    const select = document.querySelector('.selected');
    select.classList.remove('selected');
    event.target.classList.add('selected');
}

/* ---------------------------- REQUISITO 08 ---------------------------- */

function paintPixel() {
    const pixelSelected = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixelSelected.length; i += 1) {
        pixelSelected[i].addEventListener('click', function (event) {
            let current = document.querySelector('.selected').style.backgroundColor;
            event.target.style.backgroundColor = current;
        })
    }
}

paintPixel();

/* ---------------------------- REQUISITO 09 ---------------------------- */

const button = document.createElement('button');
button.id = 'clear-board';
button.title = 'Limpar Campos';
button.innerHTML = 'Limpar';

const secondSection = document.querySelector('#pixel-board');
document.querySelector('body').insertBefore(button, secondSection);

button.addEventListener('click', clearPixels);

function clearPixels() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((element) => {
        element.style.backgroundColor = "white";
    })
}

/* ---------------------------- REQUISITO 10 ---------------------------- */

function sizeBoard() {
    const inputPixel = document.querySelector('input').value;
    if (inputPixel === '') {
        alert('Adicione um valor');
    }
    const number = parseInt(inputPixel);
    return number;
}

function resizePixels() {
    const buttonBoard = document.querySelector('#generate-board');
    buttonBoard.addEventListener('click', function () {

        sectionPixels.innerHTML = '';
        const size = sizeBoard();
        if (size < 1) {
            alert('Board inválido!');
        } else if (size < 5) {
            addPixels(5);
        } else if (size > 50) {
            addPixels(50);
        } else {
            addPixels(size);
        }
    })
}

resizePixels();