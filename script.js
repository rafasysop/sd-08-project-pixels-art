function criaCores(){
  const paleta = document.getElementById('color-palette');
  
  for (index = 1; index <=4; index +=1){
    const cor = document.createElement('div');    
    paleta.appendChild(cor);
    cor.id = `color${index}`;
    cor.className = 'color'; 
    }
    let cores = document.getElementsByClassName('color');
    for (let index =1; index <4; index +=1){
      cores[index].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
      // copiei a função de numero aleatorio do site https://www.w3schools.com/js/js_random.asp
    };
  }
  

criaCores();

function criaPixels(){
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';       
    board.appendChild(pixel);
  }
}
criaPixels();

function selecionaCor(){
  const cores = document.querySelectorAll('.color');  
    for (index = 0; index < cores.length; index +=1){
      cores[index].addEventListener('click', mudaClasse)
    }
    function mudaClasse(event){
      for (index = 0; index<cores.length; index+=1){
        cores[index].className = 'color';
      }
    event.target.className = 'color selected';
    }           
}
selecionaCor();

let pixels = document.getElementsByClassName('pixel');

function colorePixel(){  
  for (index = 0; index < pixels.length; index +=1){
  pixels[index].addEventListener('click', mudaCor); 
  }
  function mudaCor(event){
    let selecionada = document.querySelector('.selected');
    let cor = window.getComputedStyle(selecionada, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = cor;
  }
}
colorePixel();

function limpaQuadro(){
  let botao = document.querySelector('button');
  botao.addEventListener('click', fundoBranco)
  function fundoBranco(){
    for (index = 0; index < pixels.length; index +=1){
    pixels[index].style.backgroundColor = 'white';
    }
  }
}
limpaQuadro();

setTimeout(() => {
  let body = document.querySelector('body');
  let random = Math.random() * 255;
  body.backgroundColor = `rgb(${random},${random},${random})`;
}, 200);
