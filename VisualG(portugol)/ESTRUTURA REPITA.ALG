Algoritmo "estrutura repita"
//26/05/2020
Var
   sairLoop: caractere
   valor1, valor2: real


Inicio
      repita
            escreva("digite o primeiro valor: ")
            leia(valor1)
            escreva("digite o segundo valor: ")
            leia(valor2)
            escreval("rsultado: ", valor1 + valor2)
            escreval("deseja sair? (y/n)")
            leia(sairLoop)
      ate sairLoop <> "n"

Fimalgoritmo