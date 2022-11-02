// Qual a regra que geralmente usamos para decidir se usamos o while ou o for?
// Quando não sabemos o momento da parada usamos o while;

//for - para
for(let i = 0; i < 10; i++){
    console.log(i)
}
//esse for serve para parar a operação
for (let i = 100; i > 0; i--) {
    if(i===50){
        break;
    }
    console.log(i)
}
//esse for serve para pular alguma coisa
for (let i = 10; i > 0; i--) {
    if (i === 5) {
    continue;
    }
    console.log(i);
}

//while - enquanto

let i = 0;
while (i < 10) {
    console.log(i)

    i++;
    }


//for of
let name = 'Bruno'
let names = ['Tay', 'Rebeca', 'Renato' ]

for(let char of name) {
    console.log(char)
}
//ou
let name = 'Bruno'
let names = ['Tay', 'Rebeca', 'Renato' ]

for(let name of names) {
    console.log(name)
}

//for in
let person = {
    name: 'Bruno',
    age: 37,
    weight: 90.5
}
for (let property in person){
    console.log(property);
  //console.log(person['name']) acessando propriedade model 1
  //console.log(person.name) acessando propriedade model 2
  //console.log(person[property]) acessando propriedade model 3
}
