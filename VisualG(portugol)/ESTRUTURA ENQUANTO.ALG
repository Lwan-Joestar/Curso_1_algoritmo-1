Algoritmo "estrutura enquanto"
// 24/05/2020
Var

   nome: caractere
   idade, limite, contador: inteiro


Inicio

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

Fimalgoritmo