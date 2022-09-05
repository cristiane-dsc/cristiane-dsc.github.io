// Variáveis globais
var entrada = document.getElementById('entrada');
var listaTarefas = document.getElementById('listaTarefas');
var botao = document.getElementById("botao");

// Função que adiciona uma nova tarefa à lista
function adicionaTarefa() {

  if (entrada.value) {  // validação que impede adição de tarefas vazias
    let conteudo = document.createTextNode(entrada.value); // guarda conteúdo digitado pelo usuário

    // cria novos elementos HTML
    let linha = document.createElement('div');
    let icone = document.createElement('div');
    let tarefa = document.createElement('input');
    let rotulo = document.createElement('label');

    // define classes e tipos dos novos elementos criados
    linha.className = 'linha-tarefa';
    icone.className = 'icone-apagar';
    tarefa.type = 'checkbox';
    tarefa.className = 'tarefa';

    // inclui novos elementos criados dentro da div com id="listaTarefas"
    listaTarefas.appendChild(linha);
    linha.appendChild(icone);
    linha.appendChild(tarefa);
    linha.appendChild(rotulo);
    rotulo.appendChild(conteudo);

    // conta o número de tarefas existentes (<input> dentro de listaTarefas)
    quantidadeTarefas = document.querySelectorAll("#listaTarefas input").length;

    // define id do ícone apagar com base na quantidade de tarefas que já existem
    icone.id = 'icone-apagar-' + quantidadeTarefas

    entrada.value = ''; // esvazia o campo de digitação

    // Função anônima que remove tarefa a partir de detecção de eventos para clique no "X"
    icone.addEventListener("click", () => {
      linha.remove();
    });
  }
}

// Detecção de eventos que chamam adicionaTarefa() apenas se houver conteúdo na entrada

entrada.addEventListener("keydown", function (e) {  // Enter

  let key = e.which || e.keyCode || 0;  // garante compatibilidade entre navegadores

  if (key === 13) {
    adicionaTarefa();
  }
});

botao.addEventListener("click", adicionaTarefa);  // clique/toque