'use strict';
export class Receita {
    constructor(tipo, motivo, valor) {
        this.tipo = tipo;
        this.motivo = motivo;
        this.valor = valor;
    }

    get getTipo() {
        return this.tipo;
    }

    get getMotivo() {
        return this.motivo;
    }

    get getValor() {
        return this.valor;
    }
}