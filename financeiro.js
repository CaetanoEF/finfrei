import prompt from "prompt-sync"
let ler = prompt()

export function depositar(saldo, men) {
    console.log("Quanto será depositado?")
    let depositado = Number(ler())
    let novoValor = saldo + depositado;
    console.log(novoValor);
    return novoValor
}

export function sacar(saldo, men) {
    console.log("Quanto será sacado?")
    let depositado = Number(ler())
    let novoValor = saldo - depositado;
    console.log(novoValor);
    return novoValor
}

export function exibirSaldo(novoValor) {
    console.log("Seu saldo é " + novoValor)
    return novoValor
}   

export function juros(){
    console.log("Quanto sera investido?")
    let capital=Number(ler())
    console.log("Quantos meses?")
    let meses=Number(ler())
    let montante=capital*(1+0.06)**meses
    console.log("Seu capital usufrue de 6% de juros e seu montante ficou em "+ montante.toFixed(2));
    return montante
    }