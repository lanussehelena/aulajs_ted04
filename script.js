/*
Crie uma função chamada calcularTotal que receba:

•O preço unitário de um produto.
•A quantidade comprada.

Calcule o valor total da compra.

Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com desconto, conforme a regra:

•Compras acima de R$ 100,00 → 10% de desconto
•Compras até R$ 100,00 → sem desconto


Adicione uma função exibirResumo() que formate e exiba um resumo final da compra.

•Valor total antes do desconto.
•Valor final com o desconto aplicado.

OBS: Use prompt() para ler os dados do usuário (preço e quantidade).

*/10


function calcularTotal() {
    let preco = Number(prompt("Digite o preço unitário do produto: "));
    let quantidade = Number(prompt("Digite a quantidade comprada: "));
    let valorTotal = preco * quantidade;
    return valorTotal;
};

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        let desconto = valorTotal * 0.1;
        let valorComDesconto = valorTotal - desconto;
        return valorComDesconto;
    }
    else if(valorTotal < 100) {
        return valorTotal;
    }
}

function exibirResumo(valorTotal, valorFinal) {
    console.log("Relatório da compra:");
    console.log("Valor total da compra sem desconto: R$" + valorTotal);

    if(valorFinal < valorTotal) {
        console.log("Valor final com desconto: R$" + valorFinal);
    } else {
        console.log("Nenhum desconto aplicado. Valor final: R$ " + valorFinal)
    }
    
};

let valorTotal = calcularTotal();
let valorComDesconto = aplicarDesconto(valorTotal);
exibirResumo(valorTotal, valorComDesconto);