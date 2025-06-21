// Inicializar o VLibras
new window.VLibras.Widget('https://vlibras.gov.br/app');

// Atalho de teclado: Shift + C para alternar modo contraste
document.addEventListener('keydown', function (e) {
  if (e.shiftKey && e.key === 'C') {
    document.body.classList.toggle('contraste-ativo');
  }
});

// Leitura por voz (TTS) de texto selecionado
function lerTextoSelecionado() {
  const texto = window.getSelection().toString().trim();
  if (texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
  } else {
    alert('Selecione algum texto para ler.');
  }
}

// Cria botão de leitura de texto
function criarBotaoLeitura() {
  const botao = document.createElement('button');
  botao.textContent = '🔊 Ler texto selecionado';
  botao.style.position = 'fixed';
  botao.style.bottom = '20px';
  botao.style.left = '20px';
  botao.style.zIndex = '9999';
  botao.style.padding = '10px 14px';
  botao.style.backgroundColor = '#000';
  botao.style.color = '#fff';
  botao.style.border = 'none';
  botao.style.borderRadius = '8px';
  botao.style.cursor = 'pointer';
  botao.style.fontSize = '14px';

  botao.addEventListener('click', lerTextoSelecionado);
  document.body.appendChild(botao);
}

// Adiciona botão quando a página carregar
window.addEventListener('load', criarBotaoLeitura);
