Algoritmo "estrutura de escolha"
Var
    valor1, valor2, resultado: real
    operacao : caractere

Inicio
       escreva("Você me dará dois valores e eu irei calcular com base de uma operação que você me der. ")
       escreva(" escreva o valor 1: ")
        leia(valor1)
       escreva(" escreva a operação a ser feita:(Ex: +, -, *, /) ")
        leia(operacao)
       escreva(" escreva o valor 2: ")
        leia(valor2)
        
        escolha operacao
           caso "+"
              resultado := valor1 + valor2
           caso "-"
              resultado := valor1 - valor2
           caso "*"
              resultado := valor1 * valor2
           caso "/"
              resultado := valor1 / valor2

              fimescolha

        escreva(" o resultado do cálculo é: ", resultado)

Fimalgoritmo