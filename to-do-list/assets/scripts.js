var entrada = document.getElementById('entrada');
var listaTarefas = document.getElementById('listaTarefas');
var botao = document.getElementById("botao");

// Função que adiciona uma nova tarefa à lista
function adicionaTarefa() {

  let conteudo = document.createTextNode(entrada.value); // guarda conteúdo digitado pelo usuário

  // cria novos elementos HTML
  let linha = document.createElement('div');
  let icone = document.createElement('div');
  let tarefa = document.createElement('input');
  let rotulo = document.createElement('label');

  // define atributos dos novos elementos criados
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

  entrada.value = ''; // esvazia o campo de digitação

}

// Função que remove uma tarefa da lista
// function removeTarefa() {
// }

entrada.addEventListener("keydown", function(e) {  // Detecção de eventos para tecla enter

  let key = e.which || e.keyCode || 0;  // necessário para compatibilidade entre navegadores

  if (key === 13) {
    adicionaTarefa();
  }
});

botao.addEventListener("click", adicionaTarefa);  // Detecção de eventos para clique