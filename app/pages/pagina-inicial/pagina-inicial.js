'use strict';
import { Gasto } from '/app/model/gasto.js';
import { Receita } from '/app/model/receita.js';


function validaSelect() {
    let select = document.querySelector('#tipo');
    let indiceSelect = select.options[document.querySelector('#tipo').selectedIndex].value;
    if (indiceSelect === 'naoSelecionado') {
        document.getElementById('erro-select').innerHTML = 'Selecione uma opção';
        select.focus();
        return false;
    }
    document.getElementById('erro-select').innerHTML = '';
    return true;
}

$('#valor').mask('#.##0,00', { reverse: true });

function formataValorParaCalculo(valor) {
    let aux = valor.replace('.', '');
    let resultado = aux.replace(',', '.');
    return resultado;
}
function validaCampo(id) {
    const valor = document.getElementById(`${id}`).value;
    if ((valor == null) || (valor === '')) {
        document.querySelector(`#${id}`).setCustomValidity(`O ${id} deve ser informado!`);
        return false;
    }
    document.querySelector(`#${id}`).setCustomValidity('');
    return true;

}
window.onload = function () {
    let forms = document.getElementsByTagName('form');
    forms[0].onsubmit = function (e) {
        e.preventDefault();
        const transacaoUl = $('#transacoes');
        const tipoTransacao = document.querySelector('input[name="transacao"]:checked').value;
        const selectValue = document.querySelector('#tipo').options
        [document.querySelector('#tipo').selectedIndex].value;

        let motivo;
        if (validaSelect()) {
            motivo = formtransacoes.motivo.value;
            if (validaCampo('valor')) {
                let valor = document.querySelector('#valor').value;
                valor = formataValorParaCalculo(valor);
                console.log(valor);
                let gasto = '';
                let receita = '';
                if (tipoTransacao === 'gasto') {
                    gasto = new Gasto(selectValue, motivo, valor);
                    const CSSClass = 'menos';
                    const li = document.createElement('li');

                    li.classList.add(CSSClass);
                    li.innerHTML = `${motivo} <span>-R$${valor}</span>
                    <button class="btn-delete">X</button>`;
                    transacaoUl.prepend(li);
                    document.getElementById('formtransacoes').reset();

                } else {
                    receita = new Receita(selectValue, motivo, valor);
                    const CSSClass = 'mais';
                    const li = document.createElement('li');

                    li.classList.add(CSSClass);
                    li.innerHTML = `${motivo} <span>R$${valor}</span>
                    <button class="btn-delete">X</button>`;
                    transacaoUl.prepend(li);
                    document.getElementById('formtransacoes').reset();
                }
            } else { console.log('deu erro'); }
        } else { console.log('deu erro'); }
    };
};

/*
function validaNumero() {
    let valor = document.querySelector('#valor').value;
    if (isNaN(valor) || valor === '' || valor == null)
        alert('invalido');
    else alert('valido');
}

document.querySelector('#valor').addEventListener('focus', function () {
});
document.querySelector('#valor').onblur = validaNumero;*/



/*function validaRadio() {
    let radios = document.getElementsByTagName('transacao');
    for (let i in radios) {
        if (radios[i].checked)
            return true;
    }
    return false;
}*/




/*function alo() {
    let apelido = '';
    let apelidoFormatado = '';
    let confirmar = true;
    do {
        apelido = prompt('Digite seu apelido para esta sessão').trim();
        apelidoFormatado = `${apelido.substring(0, 1).toUpperCase()}
        ${apelido.substring(1, apelido.length).toLowerCase()}`;
        confirmar = confirm(`Tem certeza que deseja utilizar
        ${apelidoFormatado} como seu apelido?`);

    } while (confirmar !== true);
    usuario.innerHTML = apelidoFormatado;
}*/