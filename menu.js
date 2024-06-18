import prompt from "prompt-sync"
let ler = prompt()

export function menu(men) {
    console.log(`Qual ação você deseja executar?
        1-Depositar
        2-Sacar
        3-Visualizar Saldo
        4-Investir
        5-Sair`)
    let resposta = Number(ler())

    return resposta
}
