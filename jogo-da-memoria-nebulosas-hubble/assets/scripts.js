const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Função que vira a carta ao ser clicada
function flipCard() {
  if(lockBoard) return;       // se lockboard = true, impede clique de cartas
  if (this === firstCard) return; // impede duplo clique na mesam carta*
  this.classList.add('flip'); // adiciona a classe .flip à lista de classes
  if(!hasFlippedCard) {       // se hasFlippedCard = false
    hasFlippedCard = true;    // passa a ser true
    firstCard = this;         // e a carta atualmente clicada passa a ser this
    return;
  }
  secondCard = this;          // se não, segunda carta clicada passa a ser this
  hasFlippedCard = false;     // zera essa variável senão ela sempre vai ser true
  checkForMatch();            // verifica se as cartas clicadas são iguais
}

// Função que verifica se as duas cartas clicadas são iguais checando o data-card na div das cartas
function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();         // se os data-card forem iguais, desabilita as cartas
    return;
  }
  unflipCards();            // se não, desvira as cartas
}

// Função que desabilita clique das cartas removendo o escutador de eventos
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

// Função que desvira as cartas após 1.5 segundos removendo a class .flip
function unflipCards() {
  lockBoard = true;         // impede o clique enquanto desvira as cartas
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');    
    resetBoard();           // reseta o tabuleiro
  }, 1500);
}

// Função que reseta o tabuleiro
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Função imediatamente invocada que embaralha as cartas assim que o código é inicializado
(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  })
})();

// escutador de eventos que chama a função flipCard ao clicar na carta, aplicado a cada uma das cartas
cards.forEach((card) => {
  card.addEventListener('click', flipCard)
})

// *o duplo clique na mesma carta causaria comparação com seu próprio data-card, fazendo com que ela ficasse permanentemente virada e travando o jogo