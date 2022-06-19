var entrada = document.getElementById('entrada');
var listaTarefas = document.getElementById('listaTarefas');
var botao = document.getElementById("botao");

// Função que adiciona uma nova tarefa à lista
function adicionaTarefa(e) {

  let conteudo = document.createTextNode(entrada.value); // guarda conteúdo digitado pelo usuário

  // cria novos elementos HTML
  let tarefa = document.createElement('input');
  let rotulo = document.createElement('label');
  let span = document.createElement('span');

  // conta o número de <input> dentro da div
  quantidadeTarefas = document.querySelectorAll("#listaTarefas input").length;

  // define atributos dos novos elementos criados
  tarefa.type = 'checkbox';
  tarefa.className = 'tarefa';
  tarefa.id = 'tarefa' + (quantidadeTarefas + 1);
  rotulo.for = tarefa.id;

  // inclui novos elementos criados dentro da div com id="listaTarefas"
  listaTarefas.appendChild(span);
  listaTarefas.appendChild(tarefa);
  listaTarefas.appendChild(rotulo);
  rotulo.appendChild(conteudo);
  rotulo.insertAdjacentHTML("afterend", '</br>');  // quebra a linha após acrescentar nova tarefa

  entrada.value = ''; // esvazia o campo de digitação

}

entrada.addEventListener("keydown", function(e) {  // Detecção de eventos para tecla enter

  let key = e.which || e.keyCode || 0;  // necessário para compatibilidade entre navegadores

  if (key === 13) {
    adicionaTarefa();
  }
});

botao.addEventListener("click", adicionaTarefa);  // Detecção de eventos para clique