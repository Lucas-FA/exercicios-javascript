//8. Faça um programa que receba a idade do usuário, enquanto a
//resposta do usuário for menor que 18 anos continue a solicitar a
//idade e mostre uma mensagem quando a idade do usuário for
//maior que 18.

let idade = 0;

do {
    idade = parseInt(prompt("Digite a sua idade: "));
}while(idade < 18);

console.log("A usa idade é 18 ou maior");