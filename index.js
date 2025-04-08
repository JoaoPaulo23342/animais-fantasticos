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


const animals = document.querySelectorAll('.animais-lista img');
console.log(animals);
const animais3 = document.querySelectorAll('[href^=#]')
console.log(animais3); // retorna todos os elementos que começam com imagem
