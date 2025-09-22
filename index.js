let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const maxTentativas = 5;

const input = document.getElementById('palpite');
const btnEnviar = document.getElementById('enviar');
const resultado = document.getElementById('resultado');
const tentativasEl = document.getElementById('tentativas');
const btnReiniciar = document.getElementById('reiniciar');

btnEnviar.addEventListener('click', function () {
  const palpite = Number(input.value);

  if (!palpite || palpite < 1 || palpite > 100) {
    resultado.textContent = 'Por favor, insira um número entre 1 e 100.';
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    resultado.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
    encerrarJogo();
  } else if (tentativas >= maxTentativas) {
    resultado.textContent = `Você perdeu! O número era ${numeroSecreto}.`;
    encerrarJogo();
  } else if (palpite < numeroSecreto) {
    resultado.textContent = 'Muito baixo!';
  } else {
    resultado.textContent = 'Muito alto!';
  }

  tentativasEl.textContent = `Tentativas: ${tentativas}/${maxTentativas}`;
  input.value = '';
  input.focus();
});

btnReiniciar.addEventListener('click', reiniciarJogo);

function encerrarJogo() {
  input.disabled = true;
  btnEnviar.disabled = true;
  btnReiniciar.style.display = 'inline-block';
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  input.disabled = false;
  btnEnviar.disabled = false;
  resultado.textContent = '';
  tentativasEl.textContent = '';
  input.value = '';
  input.focus();
  btnReiniciar.style.display = 'none';
}
