/*nota1, nota2, media: real
   nome: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("digite o nome do aluno: ")
   leia(nome)
   escreval("digite a nota1 do aluno: ")
   leia(nota1)
   escreval("digite a nota2 do aluno: ")
   leia(nota2)
   media := (nota1 + nota2) / 2

   se media >= 50 entao
   escreval("Aprovado!", nome)
   senao
   escreval("Reprovado!", nome)
   fimse
   */

   var nome, nota1, nota2, passou;

   passou = false;
   nome = prompt("digite o nome do aluno: ")
   nota1 = prompt("digite a nota 1 do aluno")
   nota2 = prompt("digite a nota 2 do aluno: ")

   media = (parseInt(nota1) + parseInt(nota2)) / 2;

   if(media>= 50 )
   passou = true 

   if(passou)
       alert("aprovado")
   
   else
   alert("reprovado")