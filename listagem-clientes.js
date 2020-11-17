const removeCliente = id => {
  if(confirm(`Deseja deletar o cliente ${id}?`)) {
    deletaCliente(id);
    document.location.reload();
  }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (id, cpf, nome) => {
  const linhaTabela = document.createElement('tr');

  const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="edita-clientes.html?id=${id}">
      <button type="button" class="btn btn-primary">Editar</button>
    </a>
  `

  linhaTabela.innerHTML = conteudoLinha;

  return linhaTabela;
}

listarClientes().then(
  exibe => {
    exibe.forEach(indice => {
      corpoTabela.appendChild(exibeCliente(indice.id, indice.cpf, indice.nome));
    });
  }
);