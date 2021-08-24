'use strict';

let banco = [
    { 'tarefa': 'Estudar JS', 'status': '' },
    { 'tarefa': 'Assistir Netflix', 'status': 'checked' }
];

const criarItem = (texto, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice = ${index}>
        <div>${texto}</div>
        <input type="button" value="X" data-indice = ${index}> 
    `;
    document.querySelector('#todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.querySelector('#todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach((item, index) => criarItem(item.tarefa, item.status, index));
}

const adicionarItem = event => {
    const tecla = event.key;
    const texto = event.target.value;
    if (tecla === 'Enter') {
        banco.push({ 'tarefa': texto, 'status': '' });
        atualizarTela();
        event.target.value = '';
    }
}

const atualizarItem = i => {
    if (banco[i]['status'] === '') {
        banco[i]['status'] = 'checked'
    } else {
        banco[i]['status'] = ''
    }
    atualizarTela()
}

const reomverItem = i => {
    banco.splice(i, 1)
    atualizarTela()
}

const clickItem = event => {
    const elemento = event.target
    if (elemento.type === 'button') {
        let indice = elemento.dataset.index
        reomverItem(indice)
    } else if (elemento.type === 'checkbox') {
        let indice = elemento.dataset.index
        atualizarItem(indice)
    }
}

document.querySelector('#newItem').addEventListener('keypress', adicionarItem);
document.querySelector('#todoList').addEventListener('click', clickItem);

atualizarTela()