/*
nome: caractere
   idade, limite, contador: inteiro

     escreva("digite a quantidade de vezes que a idade será verificada ")
     leia(limite)
     contador := 0
     enquanto contador < limite faca
              escreva("insira seu nome: ")
              leia(nome)
              escreva("insira sua idade, ", nome, ": ")
              leia(idade)
              se idade > 18 entao
                 escreval(nome, " você é maior de idade!")
              senao
                   escreval(nome, " você é menor de idade!")
              fimse
              contador := contador + 1
     fimenquanto
*/

function Botao() {
    var nome, idade, limite, contador
    
    limite = prompt("quantas vezes a idade será verificada?")
    contador = 0
    while (contador < limite) {
        nome = prompt("insira seu nome: ")
        idade = prompt("insira sua idade, " + nome + ": ")
            if (idade > 18) {
                document.getElementById("amen").innerText = nome + ", você é maior de idade!"
            } else {
                document.getElementById("amen").innerText = nome + ", você é menor de idade!"
            }
    
    contador++
    }
}