// El uso del simbolo # es una propuesta de JS para declarar atributo y metodos privados

import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadDeCuentas = 0;

    constructor(cliente,numero,agencia) {
        this.setCliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadDeCuentas ++

    }

    depositosEnCuenta(valor) {
        if (valor >= 0) {
            this.#saldo += valor
        }


    }
    retiroEnCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor
        }

    }

    tranferirParaCuenta(valor, cuentaDestino) {
        this.retiroEnCuenta(valor);
        cuentaDestino.depositosEnCuenta(valor)
    }

    get saldo() {
        return this.#saldo;
    }

    set setCliente(cliente) {
        if (cliente instanceof Cliente)
            this.#cliente = cliente;
    }

    get getCliente() {
        return this.#cliente;
    }

}