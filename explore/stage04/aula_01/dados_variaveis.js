//TIPOS DE DADOS

//o codigo abaixo escreve alguma msg no console
console.log("Bem vindos ao Starter");
console.log("não iria ignorar");

//strings
console.log(`A soma de duas unidades é ${1 + 1}`); //soma com texto 
console.log(1 + 1); //soma sem texto (sem aspas)
console.log("Isso é um texto"); //somente texto

//number
33 //inteiros
12.5 // reais- float
NaN // not a number
Infinity //infinito
console.log(33); //os inteiros (por exemplo: 33)
console.log(33.3 / 3); //os reais ou float (por exemplo: 33.3),
console.log(33 / "aaa"); //o Not a Number (NaN)
console.log(Infinity); //infinito (Infinity).

//booleon 
//*somente 2 valores true = verdadeiro ou false == falso*//
console.log(true);
console.log(false);

// undefined - indefinido
// null - nulo/do jeito que não possui nada dentro/diferente de indefinido
console.log(undefined);
console.log(null);

//object
//objeto/propriedades ou atributos/funcionalidades ou metodos
//{propriedade:"valor"};
console.log({name: "Bruno", idade: 38, andar: function(){console.log('andar')}});

//array
//Uma lista /agrupamento de dado
//["Bruno", 38]
console.log(["Bruno", 38, "formado", "casado", ]);


/*TIPOS DE VARIAVEIS
nomes simbolicos para receber algum valor / atalhos de código / 3 palavras reservadas para criar uma variável
var
let 
const 
*/
let clima = "quente"; //"var clima" é uma declaração da vairavel, o sinal de igual significa que ele está recebendo um valor "tipo de dados string" que é quente
console.log(clima);

/*Scope e var
O Scope ou Escopo determina a visibilidade de uma variável em um código JS, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.*/


//VAMOS APLICAR VARIÁVEIS E TIPOS DE DADOS
//declarações
var name;  // declaração or declaration
name = "Bruno"; // atribuição de valores ou assignment
console.log(name); // valor que foi atribuido a variavel
console.log(typeof name) // qual tipo de dado foi colocado na variavel

//agrupando declarações
let name = "Bruno";
let age = 20;
let isHuman = true;
//ou criar um agrupamentos de declarações
let name, age, isHuman;
name = "Bruno";
age = 20;
isHuman = true;
console.log(name, age, isHuman);
//concatenando variaveis

let name, age, isHuman;
name = "Bruno";
age = 38;
isHuman = true;
console.log(" o " + name + " tem " + age + " anos.");//escrita de texto + variáveis
//interpolando variaveis
let name, age, isHuman;
name = "Bruno";
age = 20;
isHuman = true;
console.log(`o ${name} tem ${age} anos.`); //interpolando valores com template literails or template strings

//objeto
const person = { name: 'John', age: 20, weigh: 88.6, isAdmin: true}; //Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos
console.log(person.name) //para acessar essas propriedades usamos o "."
//ou
console.log(`${person.name} tem ${person.age} anos`);

//array
 const animals = ["Lion", "Monkey", "cat", "dog"]; //Para criarmos um vetor utilizamos [ ] envolvendo os valores
 console.log(animals[0]); //para acessar esses valores usamos a posição do valor no vetor, começando por 0,
 console.log(animals.length); //Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length