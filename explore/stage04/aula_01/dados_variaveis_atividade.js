// 1. Declare uma variável de nome wight
//let weight

// 2. Que tipo de dado é variável?
//console.log(typeof weight) //underfine

/* 3. Declare uma variável e atribua valores para cada um dos dados:
*name: String
*age: Number (integer)
*stars: Number (float)
*isSubscribed: Boolean
*/

/*let name = "Bruno" 
let age = 36
let stars = 90.5
let isSubscribed = true 
*/


// 4. A variável student abaixo é de que tipo de dados?
/*let student = {}
console.log(typeof student) object */

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
let student = {
    name: "Bruno",
    age: 36,
    weight: 90.5,
    isSubscribed: true,
};
/*4.2 Mostre o console a seguinte mensagem:
<name> de idade <age> pesa <weight> kg.
Atenção, substitua <name> <age> e <weight> pelos valores de cada proproedade do objeto*/

//console.log(` ${student.name} de idade ${student.age} pesa ${student.weight} kg.`); 

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente a Array vazio

let students =[]

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da qustão 4. 
(Não copiar e colar o objeto, mas usar o objeto criando e inserir ele no Array) */

students = [
    student
]
//console. log(students)


// 7. Coloque no console o valor da posição zero do Array acima

//console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const Rebeca = {
    name: "Rebeca",
    age: 30,
    weight:58.6,
    isSubscribed: true,
}

students = [
    student, 
    Rebeca,
]

console.log(students)

/* 9. Sem rodas o código responsa qual é a resposta do código abaixo e por que? Após sua resposta,
rode o código e veja se você acertou.

console.log(a)
var a = 1 
*/

//underfined


