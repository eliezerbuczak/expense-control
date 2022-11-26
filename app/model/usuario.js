'use strict';
export class Usuario {
    constructor(nome, email, senha) {
        this.gastos = [];
        this.receitas = [];
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    adicionarGastos(gasto) {
        this.gastos.push(gasto);
    }

    adicionarReceita(receita) {
        this.receita.push(receita);
    }
    get getSenha() {
        return this.senha;
    }

    get getEmail() {
        return this.email;
    }

    get getNome() {
        return this.nome;
    }
}