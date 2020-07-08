/*
Var
   numero, fatorial, contador: inteiro

Inicio
   escreva("insira o número para calcular o fatorial")
   leia(numero)
   
   fatorial := 1
   
   para contador de 1 ate numero faca
     
   fimpara
   
   escreva()

Fimalgoritmo
*/



function Botao() {
    var numero, fatorial, contador

    numero = prompt("insira o número para calcular o fatorial")
    fatorial = 1
    for (contador  = 1; contador <= numero; contador ++) {
        fatorial = fatorial * contador
        
    }

    document.getElementById("amen").innerText = " o fatorial de "+ numero + " é: " + fatorial
}
