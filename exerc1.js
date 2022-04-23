//5.1.Refaça o exercício da semana trocando o método utilizado pelo menos 3 dos métodos aprendidos na aula de hoje!Nesta semana incluir os dados e a hora da compra faz parte do retorno esperado para a entrega do exercício;


let clienteLilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 }, { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }
]

let clienteMaria = [
    { produto: 'Bolsa de mão', valor: 29.0 },
    { produto: 'Óculos preto', valor: 35.0 },
    { produto: 'Saia de Couro ', valor: 99.0 },
    { produto: 'Calça preta', valor: 100.0 },
]
let clienteJuliana = [

    { produto: 'Óculos preto', valor: 35.0 },
    { produto: 'Blusa de gola Vermelha ', valor: 45.0 },
    { produto: 'meia calça transparente', valor: 30.0 },
    { produto: 'Saia branca', valor: 50.0 },
]
let valorTotal = []
let descontoTotal = []


function calcularDesconto(valor) {
    if (valor >= 200.0) {
        descontoTotal.push(valor * 0.5)
    } else if (valor >= 100.0) {
        descontoTotal.push(valor * 0.2)
    } else if (valor >= 80.0) {
        descontoTotal.push(valor * 0.1)
    } else if (valor >= 50.0) {
        descontoTotal.push(valor * 0.05)
    }
}

function comprar(ComprasDaCliente) {
    let quantidadeDeItens = ComprasDaCliente.length

    ComprasDaCliente.forEach(item => {
        valorTotal.push(item.valor)
        calcularDesconto(item.valor)
    });

    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)

    descontoTotal = descontoTotal.reduce((acumulador, atual) => acumulador + atual)
    let valorFinal = valorTotal - descontoTotal

}
let hoje = new Date
let dataHoje = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
let dataCompra = hoje.toLocaleDateString("pt-BR", dataHoje);
console.log(dataCompra);

let cupomFiscal = {
    "Valor Total sem o desconto": `R$ ${valorTotal.toFixed(2).replace('.',',')}`,
    "Valor do Desconto Total": `R$ ${descontoTotal.toFixed(2).replace('.',',')}`,
    "Valor Total com o desconto": `R$ ${valorFinal.toFixed(2).replace('.',',')}`,
    "Data da Compra": dataCompra.toLocaleDateString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
if (quantidadeDeItens > 10 || valorFinal > 800.0) {
    return console.table({
        ...cupomFiscal,
        "Bônus": 'Você ganhou um voucher de R$50,00, para utilizar na sua próxima compra. '
    })
} else {
    return console.table(cupomFiscal)
}


comprar(clienteLilit)
comprar(clienteJuliana)
comprar(clienteMaria)