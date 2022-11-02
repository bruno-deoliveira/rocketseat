// 1. controle de fluxo da aplicação (control flow)
//se estiver juso 
console.log('lavar o capo')
//caso o copo esteja limpo
console.log('servir cafe')


// 2. If e Else - condição
let temperature = 38

if (temperature >= 37) {
    console.log('Febre')
} else {
    console.log('Saudável')
}
//ou
let temperature = 38;

if (temperature >= 37.5) {
    console.log("Febre alta");
} else if(tenoaratyre < 37.5 && temperature >= 37) {
    console.log("Febre Moderada");
} else {
    console.log('Saudável')
}
//ou
let temperature = 36.9
let highTemperature = 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
    console.log('Febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


// 3. switch
// Supondo que estamos usando o switch, o que acontece se **não** adicionamos o break no final de cada case?
//resp: O código continua seguindo para os cases abaixo porque entende que o bloco ainda não acabou.
let expression = 'a'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break
        case 'b':
            //codigo para expression b
            console.log('b')
            break
        default:
            console.log('default')
            break 
//OBS: caso a espression não seja nenhuma dos codigos irá da default

//ou 
function calculate(number1, operator, number2){
    let result = 0;

    switch(operator){
        case '+':
            result = number1 + number2
            break
        case'-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2    
            break
        case '/':
            result = number1 / number2
            break
        default: 
        console.log('não implementado')
        break
    }

    return result
}

console.log(calculate(4, '+', 8))


// 4. throw e try/catch   (trow - lançar/ catch - capturar/ try - tentar )

//throw
function sayMyName(name = ''){
    if (name === ''){
        throw 'Nome é Obrigatório'
    }
    console.log('depois do erro')
}

//try...catch
try{
    sayMyName
} catch(e){
    console.log(e)
}

console.log('após a função de erro')
