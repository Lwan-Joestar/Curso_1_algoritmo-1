Algoritmo "estrutura se e senao"
Var
    valor1, valor2, resultado: real
    operacao : caractere

Inicio
       escreva("Voc� me dar� dois valores e eu irei calcular com base de uma opera��o que voc� me der. ")
       escreva(" escreva o valor 1: ")
        leia(valor1)
       escreva(" escreva a opera��o a ser feita:(Ex: +, -, *, /) ")
        leia(operacao)
       escreva(" escreva o valor 2: ")
        leia(valor2)

       se operacao = "+" entao
          resultado := valor1 + valor2
       senao
         se operacao = "-" entao
            resultado := valor1 - valor2
         senao
           se operacao = "*" entao
              resultado := valor1 * valor2
           senao
             se operacao = "/" entao
                resultado := valor1 / valor2
        fimse
        fimse
        fimse
        fimse
        escreva(" o resultado do c�lculo �: ", resultado)
       
Fimalgoritmo