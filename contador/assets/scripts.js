// O elemento <span> do html é a variável currentNumberWrapper aqui, que tem a id="currentNumber"
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


// Função que incrementa 1
// O html dentro do elemento <span> assume o valor de currentNumber
function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  // Se o valor for negativo, o texto fica vermelho
  red();
}

// Função que decrementa 1
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  red();
}

// Função que zera o contador
function reset() {
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
}

// Função que muda a cor do texto do contador pra vermelho se o valor for negativo
// Ela chama '#currentNumber.negativo' do arquivo CSS pra aplicar o estilo especificado lá
// Outra opção mais simples é alterar o estilo diretamente aqui sem chamar nada do arquivo CSS: variavel.style.color = 'cor'
function red() {
  if (currentNumber < 0) {
    currentNumberWrapper.classList.add('negativo');
  } else {
    currentNumberWrapper.classList.remove('negativo');
  }
}