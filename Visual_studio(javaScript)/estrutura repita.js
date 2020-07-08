function Botao() {
    var sair, value1, value2, resultado
    do{
        value1 = prompt("digite o primeiro valor: ")
        value2 = prompt("digite o segundo valor: ")
        resultado = parseInt(value1) + parseInt(value2)

        document.getElementById("amen").innerText = "resultado: " + resultado
        sair = prompt("deseja sair? (y/n) ")
    }while(sair == "n" )
}