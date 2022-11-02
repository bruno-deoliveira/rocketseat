/* expressões e operadores
-Expressions
-operators
    binary
    unary
    ternary

*/

/* 1. new
*left-hand-side expression
*criar um novo objeto
*/

let name = new String ('Bruno')
let age = new Number(23)
console.log(name, age)

/* 2. Operadores unários
Typeof 
delete
*/
const person = {
    name: 'Bruno',
    age: 25
}
delete person.age
conslole.log(person) //resp: ele só apresenta o nome pq a idade(age) foi deletada

// 3.Operadores Aritiméticos

//multiplicação *
console.log(3 * 5)

//divisão /
console.log(12 / 2)
//soma +
console.log(34 + 67)
//subtração - 
console.log(34 - 23)

//resto da divisão %
let remainder //remainder = resto da divisão
remainder = 11 % 3
console.log(remainder) //resp: 2

//incremento ++
let increment = 0 //increment = acrescentar mais 1 número ou valor
increment++
console.log(increment)

//decremento -- 
let decrement = 0 //decrement = diminui 1 número ou valor
decrement--
console.log(decrement)

//exponencial **
console.log(3 ** 2) //3 elevado a 2

// 3. Grouping Opeator ()
let total = (2 + 3) * 5
console.log(total) //resp: 25. Primeiro ele soma o que está em parenteses e depois multiplica

// 4. Operadores de comparação igual e diferente

//irá comparar valores e retornar um Boolean como resposta à comparação
let one = 1 // variavel let chamado one recebe 1 (sinal de = siginifica recebe)
let two = 2
// == igual a 
console.log( two == 1) //false - two não é igual a 1
console.log( one == "1") // true - one é igual a 1
//!= diferente de 
console.log(one != two) //true - one é diferente de two
console.log(one != 1) //false - one é diferente de 1
console.log(one != "1") //false - one é diferente de "1"

// 5. Operadores de comparação estritamente igual e estritamente diferenTe
let one = 1 // variavel let chamado one recebe 1 (sinal de = siginifica recebe)
let two = 2
// === estritamente igual
console.log( one === "1") //false - one não é estritamente igual a"1" POR SEU UMA STRING
console.log( one === 1) // true - one é igual é estritamente igual a 1 POR SEU UM number
// !== estritamente diferenTe
console.log(two !== "2") //true - pq o two não é diferente valor mais é diferente no o tipo 
console.log(two !== 2) //false - pq o two não é diferente no valor e não é diferente no tipo

// 6. Operadores de comapração maior que e menor (igual)
let one = 1 // variavel let chamado one recebe 1 (sinal de = siginifica recebe)
let two = 2

// > maior que 
console.log(one > two) //false

// >= Maior igual a
console.log(one >= 1) //true
console.log(two >= 1) //true

// < menor que
console.log(one < two) //true

// <= menor igual a 
console.log ( one <= two) //tue
console.log ( one <= 1) //true
console.log ( one <= 0) //false

// 7. Operadores de atribuição (Assignment)
let x
console.log(x)

// assignment
x = 1

// addittion assignment
// expressão seria x = x + 2
x += 2

//subtraction assignment
// expressão seria x = x - 1
x -= 1

//multiplication assignment
//expressão seria x = x * 2
x *= 2

//division assignment
// expressão seria x = x / 2
x /= 2

//remainder, 
x %= 2

//exponetation
x **= 2

// 8. Operadores Lógicos (logical operators)

//-2 valores booleanos, quando verificados, 
// resultará em verdadeiro ou falso 

let pao = true
let queijo = true

// and siginifica &&
console.log(pao && queijo)
// or significa ||
console.log(pao || queijo);
// not significa !
console.log(!queijo);

// 9. Operador Condicional (ternário)

//dependendo da condição, nós recebemos valores diferentes
//condição então valor 1 se não valor 2 
//condition ?(verdadeira) value1 :(falsa) value2

//exemplos 
//café da manhã top
let pao = true 
let queijo = true
const niceBreakfast = pao && queijo ? "café top" : "café ruim" 
//se essa condição for verdadeiro (? então) escreve café topo (: se não) escreve café ruim
console.log(niceBreakfast)

//maior de 18

let age = 16 
const canDrive = age >= 18 ? 'can drive' : 'cannot drive'
console.log(canDrive)

// 10. Operador de String (string operator)
//comparisson (comparação)
console.log('a' == 'b')

//concatenation (concatenação)
//retorna a união de duas Strings
let alpha = 'alpha'
console.log(alpha +'bet') //resp: alphabet

//11. Falsy e truthy
/* FALSY
quando um valor é considerado false em contextos onde um 
booleano é obrigatorio (condicionais e loops)?
false 
0
-0
""
null
underfine
NaN
*/
console.log( NaN ? 'verdadeiro' : 'falso')

/* TRUTHY
quando um valor é considerado true em contextos onde um 
booleano é obrigatorio (condicionais e loops):
true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
console.log({} ? "verdadeiro" : "falso");

/* 12.Precedência dos operadores (operator precedence)

*grouping                 ( )
*negação e incremento     ! ++ --
*multiplicação e divisão  * /
*adição e subtração       + -
*relacional               < <= > >=c
*igualdade                == != === !==
*and                      &&
*or                       ||
*condicional              ?:
*assigment (atribuição)   = += -= *=

*/