function fillPalete() {
  const colorList = ['black', 'red', 'green', 'blue'];
  const palete = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const paleteItem = document.createElement('li');
    paleteItem.className = 'color';
    paleteItem.addEventListener('click', changeSelected);
    paleteItem.style.backgroundColor = colorList[index];
    firstSelect(paleteItem);
    palete.appendChild(paleteItem);
  }
}

function firstSelect(element) {
  if (element.style.backgroundColor === 'black') {
    element.className = 'color selected';
  }
}

function fillBoard() {
  const board = document.querySelector('#pixel-board');
  for (let rowIndex = 0; rowIndex < 5; rowIndex += 1) {
    const row = document.createElement('tr');
    for (let colIndex = 0; colIndex < 5; colIndex += 1) {
      const col = document.createElement('td');
      col.className = 'pixel';
      col.addEventListener('click', paint);
      row.appendChild(col);
    }
    board.appendChild(row);
  }
}

function changeSelected(event) {
    let lastSelected = document.querySelector('.selected')
    lastSelected.className = 'color';
    let newSelected = event.target;
    newSelected.className = 'color selected';
}

function paint(event) {
  let selectedColor = document.querySelector('.selected');
  let color = selectedColor.style.backgroundColor;
  let selectedPixel = event.target;
  selectedPixel.style.backgroundColor = color;
}

fillPalete();
fillBoard();
