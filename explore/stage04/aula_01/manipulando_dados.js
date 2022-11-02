/* 1. prototype

*prototype-based language
*prototype chain
*__proto__
*/

/* 2. type conversio (typecasting) vs Type coersion
*alteração de um tipo de dado para outro tipo
*/
console.log('9' + 5) // string + number ele não irá somar e sim concaterna dando o resultado 95
console.log(Number('9')+5) // nesse formato indicando que a string é um number realizamos a soma

// 3. Manipulando Strings e Números
//Transformar String em números e números em string
let string ='123'
console.log(Number(string))
let number = 321
console.log(String(number))

//4. Manipulando Strings e Números 
// Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// 5. Manipulando e números de casas decimais
// transformar um número com 2 casa decimais e trocar por vírguloa

let number = 345.33452345
console.log(number.toFixed(2).replace(".",","))
//obs: a função replace fez a troca do ponto por virgula e os numeros apresentados são dados strings pq a virgula nfaz parte do número.

// 6. Manipulando e números de maiúsculo e minúsculo
//transforme letras minúscula em maiúscula. Faça o contrário disso também
let word = "Programas é muito bancana!"
console.log(word.toUpperCase()) //resp: PROGRAMAS É MUITO BANCANA!
let word = "PROGRAMAS É MUITO BANCANA!"
console.log(word.toLowerCase()); //resp: programas é muito bancana!

//7. Manipulando strings e Arrays - separando strings
//separe um texto que contem espaçoes, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaçoes, coloque...

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray) //resp:  ['Eu', 'quero', 'viver', 'o', 'Amor!']

let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase()) //resp: eu_quero_viver_o_amor!

//8. Manipulando strings e Arrays - encontrando palavras em frase
//verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("amor")) 
//obs.1- ele responde como verdadeiro(true) e falso(false)
//obs.2- o includes é faz diferença entre maiúscula e minúscula

//9. manipulando Arrays 
//Criando Array com construtor
let myArray = ['a', 'b', 'c']
console.log(myArray) //Array sem construtor 

let myArray = new Array  ('a', 'b', 'c')
console.log(myArray) //Array com construtor 

//10. Manipulando Arrays
//Contar elementos de um array
console.log(["a","b", "c"].length) //resp: 3

//11. Manipulando Arrays - strings para arrays
//transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word)) //resp: (11) ['m', 'a', 'n', 'i', 'p', 'u', 'l', 'a', 'ç', 'ã', 'o']

//12. manipulando arrays
let techs = ["html", "css", "js"]
//adicionar um item no fim 
techs.push("nodesjs")
//adicionar no começo
techs.unshift("sql")
//remover do fim 
//techs.pop()
//remover do começo
//techs.shift()
//pegar somentes alguns elementos do array
//resp: console.log(techs.slice(1, 2)) //resp: "css"
//remover 1 ou mais itens em qualquer posição do array 
//techs.splice(1,2) //resp: "html"
//encontrar a posição de um elemento do array
let index = techs.indexOf("css") //resp: posição 2 pq foi acrescentado o nodejs e sql

console.log(techs)