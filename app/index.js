'use strict';

import { usuarios } from '/app/model/usuarios.js';

let loginValido;
let usuarioAtual = null;

const iterarUsuarios = function (listaDeUsuarios) {
    let email = document.getElementById('email').value;
    let senha = document.querySelector('#password').value;
    for (const user in listaDeUsuarios) {
        if (listaDeUsuarios[user].getEmail === email && listaDeUsuarios[user].getSenha === senha) {
            loginValido = true;
            usuarioAtual = listaDeUsuarios[user];
        }

    }
};

//verifica se o usuario está cadastrado no sistema
function verificarUsuario() {
    iterarUsuarios(usuarios);
    if (loginValido === true) {
        setTimeout(function () {
            window.location.href = '/app/pages/pagina-inicial/pagina-inicial.html';

        }, 3000);
    } else {
        setTimeout(console.log('Email ou senha errado'), 3000);
    }
}
window.onload = () => {

    let forms = document.getElementsByTagName('form');
    forms[0].onsubmit = function (e) {
        e.preventDefault();
    };
};

document.getElementById('button-entrar').addEventListener('click', verificarUsuario);






