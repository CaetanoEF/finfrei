import prompt from "prompt-sync"
let ler = prompt()


import { menu } from "./menu.js";
import { depositar, exibirSaldo, sacar,juros} from "./financeiro.js";
let saldo = 0
let resposta = 0
let continuar = "S"
let menus = 0
let depo = 0
let saque = 0
let exibir = 0
let novoValor = 0
while (continuar == "S") {
    menus = menu()
    if (menus == 1) {
        novoValor += depositar(saldo)
    }
    else if (menus == 2) {
        novoValor += sacar(saldo)
    }
    else if (menus == 3) {
        depo = exibirSaldo(novoValor)
    }
    else if (menus == 4) {
        novoValor = juros()
    }
    else if (menus == 5) {
        continuar="n"
    }


}