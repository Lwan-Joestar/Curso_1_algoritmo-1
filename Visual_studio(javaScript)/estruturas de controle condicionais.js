

function acaoBotao(params) {
    var valor1, valor2, operacao, resultado
    alert("Você me dará dois valores e eu irei calcular com base de uma operação que você me der.")
    valor1 = prompt("insira o valor 1")
    operacao = prompt("qual operação deseja usar? (ex: +, -, *, /)")
    valor2 = prompt("insira o valor 2")
    
    
    if( operacao == "+" ){
        resultado == parseInt( valor1 ) + parseInt( valor2 )
    }
    else if( operacao == "-"){
    resultado == parseInt( valor1 ) - parseInt( valor2 )
    }
    else if( operacao == "*"){
        resultado == parseInt( valor1 ) * parseInt( valor2 )
    }
    else if(operacao == "/")
    resultado == parseInt( valor1 ) / parseInt( valor2 )
    
    document.getElementById("amen").innerText = "o resultado da operação foi" + resultado
    
    
}

