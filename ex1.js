//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. 
//Verifique se o nome de usuário é "admin" E a senha é "senha123". 
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

let userName = prompt("Digite um nome de usuário: ")
let senha = prompt("Digite a senha: ")

/* if (userName == "admin") {
    console.log("Você é admin");
    if(senha == "senha123") {
        console.log("Bem vindo ADMIN!");
    }
} */

if (userName == "admin" && senha == "senha123") {
    console.log("Login bem-sucedido");
}
else {
    console.log("Você não tem permissão de acesso");
}