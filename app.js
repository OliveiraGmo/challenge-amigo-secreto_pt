const amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo').value;

  if (nomeAmigo.trim() === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nomeAmigo);
  document.getElementById('amigo').value = '';

  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach(amigo => {
    const itemLista = document.createElement('li');
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para o sorteio.');
    return;
  }

  const sorteio = sortearPares(amigos);
  exibirResultado(sorteio);
}

function sortearPares(listaAmigos) {
  const embaralhar = array => array.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
  const amigosEmbaralhados = embaralhar([...listaAmigos]);
  const sorteio = {};

  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigoAtual = amigosEmbaralhados[i];
    const amigoSorteado = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
    sorteio[amigoAtual] = amigoSorteado;
  }

  return sorteio;
}

function exibirResultado(sorteio) {
  const resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = '';

  for (const amigo in sorteio) {
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `${amigo}: ${sorteio[amigo]}`;
    resultadoLista.appendChild(itemResultado);
  }
}