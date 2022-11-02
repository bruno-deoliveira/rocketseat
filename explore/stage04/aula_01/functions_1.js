// 1. criar um aplicativo de frases motivacionais 
// declaration - declaração da função 
// function statement
function createPhrase() {
    console.log("Estudar é muito bom");
    console.log("Paciência e persistência");
    console.log("Revisão é mãe do aprendizado");
}
// executar a função - execute, run, call, invoke
createPhrase()
console.log('fim do programa')

// 2. argumentos e parâmetros (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2)
}
sum(2,8) //arguments - argumentos 
*/


//3. Retronando valores dentro da função
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`)
*/

//4. função ou function é um liquidificador
function fazerSuco(fruta1, fruta2){
    return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco(`banana`,`maça`)

console.log(copo)

//5. function scope
let subject = 'create video'

function createThinks(subject){
    subject = "study"
    return subject
}
console.log(createThinks(subject)) //resp: study
console.log(subject) //resp: create video


// 6. function hoisting 
sayMyName()
function sayMyName() {
    console.log('Bruno') //resp: Bruno
}

// 7. arrow function 
const sayMyName = () => {
    console.log('Bruno')
}
sayMyName()  //resp: Bruno

// 8. callback function 
function sayMyName (name){
    console.log(name)
}
sayMyName('Bruno') //resp: Bruno

/* 9. funções construtoras

*expressão ner 
*criar um novo objeto
*this keyword
*/
function Person (name){
    this.name = name
}
const bruno = new Person("Bruno")
const tay = new Person ("Tay")
console.log(bruno)
console.log(tay)

