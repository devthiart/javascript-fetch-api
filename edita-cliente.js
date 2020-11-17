const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');

const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then( dados => {
  inputCPF.value = dados[0].cpf;
  inputNome.value = dados[0].nome;
});

const formEdicao = document.querySelector('[data-form]');

const mensagemSucesso = (mensagem) => {
  const linhaTabela = document.createElement('tr');

  const tagMensagem = `<div class="alert alert-success" role="alert">${mensagem}</div>`

  linhaTabela.innerHTML = tagMensagem;

  return linhaTabela;
}

const mensagemErro = (mensagem) => {
  const linhaTabela = document.createElement('tr');

  const tagMensagem = `<div class="alert alert-warning" role="alert">${mensagem}</div>`

  linhaTabela.innerHTML = tagMensagem;

  return linhaTabela;
}

formEdicao.addEventListener('submit', event => {
  event.preventDefault();

  if(validaCPF(inputCPF.value) === false) {
    alert("CPF inválido!");
    return;
  }

  editaCliente(id, inputCPF.value, inputNome.value)
    .then(
      resposta => {
        if(resposta.status === 200) {
          formEdicao.appendChild(mensagemSucesso("Cliente alterado com sucesso!"));
        } else {
          formEdicao.appendChild(mensagemErro("Não foi possível alterar o cliente!"));
        }
      }
    )
});