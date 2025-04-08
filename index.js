/* Get Element By ID 
   seleciona e retorna o elemento do DOM
   // seleciona pelo ID
   const animaisSelection = document.getElementById('animais');
   const contatoSection = document.getElementById('contato');
    // retorna null caso não exista o elemento
    const naoExiste = document.getElementById('nao-existe');
    output(naoExiste); // null
*/
/* ForEach
    Constantemente vamos selecionar uma lista de elementos do dom.
    A melhor forma para interagirmos com os mesmos é ultilizando
    o metodo forEach.
    const imgs = document.querySelectorAll('img');
    imgs.forEach((item) => {
        console.log(item);
    });

*/
/* 
Parãmetros do forEach
O primeiro parâmetro é o callback, ou seja, a função que será executada
a cada item. Essa função pode receber até três parâmetros:
1. O item atual do loop (item)
2. O índice do item atual (index)
3. O array original (array)
        const imgs = document.querySelectorAll('img');
        imgs.forEach((item, index, array) => {
            console.log(item, index, array);
        });
        
    */

        const imgs = document.querySelectorAll('img');
        imgs.forEach((item, index) => {
            console.log(item, index);
        });

        /* Arrow Function
        Sintaxe Curta em relação a funtion expression, Basta 
        remover a palavra function e adicionar o fat arrow => após 
        os argumentos.
        const imgs = document.querySelectorAll('img');
        imgs.forEach((item, index) => {
            console.log(item, index);
        });
        */

    const p2 = document.querySelectorAll('p');
    
    
    p2.forEach((item, index) => {
        console.log(index, item.innerText);

        
        
    });
