/* Get Element By ID 
   seleciona e retorna o elemento do DOM
   // seleciona pelo ID
   const animaisSelection = document.getElementById('animais');
   const contatoSection = document.getElementById('contato');
    // retorna null caso não exista o elemento
    const naoExiste = document.getElementById('nao-existe');
    output(naoExiste); // null
*/
const animais = document.getElementById('animais');

const primeiraUl = document.querySelector('ul');

const linksInternos = document.querySelectorAll('[href^="#"]');

console.log(linksInternos); // retorna todos os links internos

const gridSection = document.getElementsByClassName('grid-section');
const gridSection2 = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section'); // adiciona a classe grid-section na primeira ul
console.log(gridSection); // retorna uma coleção HTML
console.log(gridSection2); // retorna uma NodeList 

const arrayGrid = Array.from(gridSection); // transforma a coleção HTML em um array

const img = document.querySelectorAll('.animais-lista img');
console.log(img)

const imagem = document.querySelectorAll('[src^="img/imagem"]'); 
console.log(imagem); 

const links = document.querySelectorAll('[href^="#"]'); // seleciona todos os links do site