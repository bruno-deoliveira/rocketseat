# Perguntando nome e mostrando mensagem
Como resolver problemas na linguagem de programação?
Como melhorar minha lógica de programação?
1. Identifique o que já sabe e faça!
2. queber o grande problema em problemas menores!

O que estou aprendendo de ferramentas do JS
[] executar funções
[] variáveis
[] concatenação
[] tipo de dado: String
[] Básica de sintaxe

* ATIVIDADE #1
alert("Agora eu sei programar em js");
Encontre a solução ao problema:
"Pergunte o nome do usuário e escreva a mensagem:
Olá, [nome do usuário]"

let nome = prompt("Qual o seu nome?");
alert ("Olá " + nome);
let idade = prompt("Qual a sua idade?");
alert("Você tem " + idade);
let pais = prompt("Qual pais você mora?");
alert("Que legal você mora no " + pais);
alert("Seja muito bem vindo a nossa página!")

# Somar dois números
Boas práticas na escrita de variáveis
- escrever em inglês
- sem espaços ou acentuções especiais no nome 
- não pode iniciar com número
- camelCase 
- ponto e virgula servem para finalizar uma expressão de código e é facultativo

[] tipo de dado: Number
[] usamos o typeof para descobrir qual o tipo de dado
[] operador matemático
[] manipulação de dados
    [] type conversio (type casting)
    [] Number() (função construtora para converter um dado em número)
    [] String () (função construtora para converter um dado para string)
[] ordem de precedência dos operadores
[] group operator

* ATIVIDADE #2
Solicite 2 números, faça a soma deles e 
apresente o resultado final ao usuário
1. modelo:
alert('Iremos somar 2 números');
let numberOne = prompt('Digite o primeiro númro: ');
let numberTwo = prompt('Digite o segundo número: ');
alert ("Resultado final " +((Number(numberOne) + Number(numberTwo)))

ex1: alert (Number(numberOne) + Number(numberTwo)
ex2: alert ((Number(numberOne) + Number(numberTwo)) / 2);

2. modelo
alert('Iremos somar 2 números');
let numberOne = prompt('Digite o primeiro númro: ');
let numberTwo = prompt('Digite o segundo número: ');
let result = Number(numberOne) + Number(numberTwo)
alert ("Resultado final é " + result)

# Operações matemáticas

Melhorar as lógicas de programação 
- Perguntas corretas
- Entender o problema 
[] operadores matemáticos

* ATIVIDADE #3
CApturar 2 números e fazer as operações matemáticas 
de soma, subtração, multiplicação, divisão e resto da divisão.
E para cada operação, mostrar um alerta com o resultado.

let firstNumber = prompt('Digite o peimeiro número');
let secondNumber = prompt("Digite o segundo número");
//transformar o resultado da variavel let de string p/ Number
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber

alert('soma: ' + sum)
alert('subtração: ' + sub)
alert('multiplicação: ' + multi)
alert('divisão: ' + div)
alert('resto: ' + restDiv)

# Calculando a média de um estudante
- Fluxos da aplicação
Caminhos lógicos baseado em algum dado ou informação
- Boas práticas na programação
Não repetir código

[] Tipo de dado: Boolean (true | false)
[] if/else (elseif)
[] Operadores comparativos
    > (maior que)
    < (menor que)
    >= (maior ou igual a)
    <= (menor ou igual a)
    == (igual a)
    != (diferente de)

* ATIVIDADE #4
Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.
Se o Aluno passou no bimestre, dar os parabéns. 
Se o aluno não passo uno bimestre, motinar o aluno a dar o seu melhor na prova de recuperação.
Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

let student = prompt("Qual o nome do(a) aluno(a)?");
let n1 = prompt("Qual a nota da primeira prova?");
let n2 = prompt("Qual a nota da segunda prova?");
let n3 = prompt("Qual a nota da terceira prova?");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

average = average.toFixed(2);

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average);
} else if (average < 3) {
    alert("Reprovado");
} else {
    alert(
    student +
        " estude para sua prova de recuperação! Sua média foi de: " +
        average
    );
}

# Criando lista de compras
Estrutura de dados
- Organização e gerenciamento dos dados
- Melhor eficiência do código
[] Estruturas de repetição

- laço de repetição
- for
[] Vetores (Arrays)
[] Tipo de dado estruturado
[] incremental (++): o valor + 1
[] Tipo de dado: undefined

* ATIVIDADE #5
Capture 10 items para compor a lista de um supermercado.
Após capturar os 10 items, imprima-os, separando por vírgula.

let items = [];

for(let item = 0; item < 2; item++) {
    let itemName = prompt("Digite o item " + (item + 1))

    items[item] = itemName
}

alert(items)

# Jogo de advinhação
[] Como controlar o fluxo da aplicação
[] Estrutura de repetição while
[] Gerar número aleatório utilizando Math()

- Pacote com funcionalidades matemáticas
- Math.random()
- Math.round() - Math.ceil() - Math.floor()
[] Tipo de dado: NaN
- não é um número
[] Tipo de erro: SyntaxError
- erro de sintaxe; erro de escrita de código
[] console
- Pacote com funcionalidades para o console do devtools (browser)
[] template literals ou template strings
- interpolação de dados

* ATIVIDADE #6
** Jogo da advinhação **

Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando? Está entre 0 e 10"
Crie um lógica para gerar um número aleatório 
e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.
Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente:"
Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"
Substitua o "x" da mensagem, pelo número de tentativas

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");
const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente:");
    xAttempts++;
}

alert(
    `Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`
);

# Interagindo com o menu de opções - parte 01
Aperfeiçoando a resolução de problemas:

Perguntas a serem feitas:
1. Quais os dados de entrada que terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal? (fluxo ideal)
4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
5. Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)

Ferramentas da linguagem que abordaremos
[] loop while
[] arrays e funções de arrays
[] condicional if/else
[] template literals (strings)

* ATIVIDADE #7 parte 01
Faça um programa que tenha um menu e apresente a seguinte mensagem:
"Olá usuário! Digite o número da opção desejada"
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  --- 
O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
Se não houver nenhum item cadastrado, mostrar a mensagem: 
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

Dados de entrada do usuário:
1. número desejado
2. item da lista

Variáveis: 
1. opção digitada
2. lista de itens

let option;
let items = [];

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `)
  );

  if (option == 1) {
    let item = prompt("Digite o nome do item");
    items.push(item);
  } else if (option == 2) {
    if (items.length == 0) {
      alert("Não existem itens cadastrados");
    } else {
      alert(items);
    }
  } else {
    alert("Tchau");
  }

  console.log(option, items);
}

# Interagindo com o menu de opções - parte 02
1. Quais os dados de entrada que terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal? (fluxo ideal)
4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
5. Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)

Ferramentas da linguagem que abordaremos
[] loop while
[] arrays e funções de arrays
[] condicional switch e if/else
[] template literals (strings)

* ATIVIDADE #7 parte 02
Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.


let option;
let items = [];

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `)
  );

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item");
      items.push(item);
      break;
    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados");
      } else {
        alert(items);
      }
      break;
    case 3:
      alert("Tchau");
      break;
    default:
      alert("Opção inválida. Tente novamente");
  }
}

# Estruturando dados com objetos
[] Estruturas de dados: Objetos
[] object literal
[] for..of

* ATIVIDADE #8
Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)

# Calculando o IMC dos pacientes com funções
[] Funções (named), funções anônimas e arrow functions

* ATIVIDADE #9

Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima
  "Paciente X possui o IMC de: Y"
  Onde X é o nome do paciente e Y é o IMC desse paciente
  Crie uma função para fazer o cálculo de IMC

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

# Mais conceitos, revisão, finalização e próximos passas
https://efficient-sloth-d85.notion.site/O-que-aprendemos-73d7163ff756450fb5d507f2aaa6604a
