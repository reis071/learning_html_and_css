let listaProdutos = [
    {produto: 'Arroz', quantidade: 10},
    {produto: 'Feijão', quantidade: 20},
]

const tabelaProduto = document.getElementById('tabela')

for (let i = 0; i < listaProdutos.length; i++){
    tabelaProduto.innerHTML += `<tr><td>${listaProdutos[i].produto}</td><td>${listaProdutos[i].quantidade}</td></tr>`
}